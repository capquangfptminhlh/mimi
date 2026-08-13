export const ALLOWED_STATUSES = [
  'PENDING_CONFIRMATION',
  'CONFIRMED',
  'COMPLETED',
  'CANCELLED',
  'NO_SHOW'
];

export const ALLOWED_TYPES = ['appointment', 'hotel'];

const text = (value, max = 200) => String(value ?? '').trim().replace(/[<>]/g, '').slice(0, max);
const phoneDigits = value => String(value ?? '').replace(/\D/g, '');
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const timePattern = /^\d{2}:\d{2}$/;

export function isVietnamPhone(value) {
  return /^(0\d{9}|84\d{9})$/.test(phoneDigits(value));
}

export function isIsoDate(value) {
  if (!datePattern.test(String(value || ''))) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(d.valueOf()) && d.toISOString().slice(0, 10) === value;
}

export function isTime(value) {
  if (!timePattern.test(String(value || ''))) return false;
  const [h, m] = value.split(':').map(Number);
  return h >= 0 && h <= 23 && m >= 0 && m <= 59;
}

export function calcNights(checkinDate, checkoutDate) {
  if (!isIsoDate(checkinDate) || !isIsoDate(checkoutDate)) return null;
  const start = Date.parse(`${checkinDate}T00:00:00Z`);
  const end = Date.parse(`${checkoutDate}T00:00:00Z`);
  const diff = Math.round((end - start) / 86400000);
  return Number.isFinite(diff) ? diff : null;
}

function validateCommon(body) {
  const owner = text(body.owner, 120);
  const phone = text(body.phone, 40);
  const pet = text(body.pet, 120);
  const petType = text(body.petType, 40);

  if (!owner) return { ok: false, error: 'OWNER_REQUIRED' };
  if (!isVietnamPhone(phone)) return { ok: false, error: 'PHONE_INVALID' };
  if (!pet) return { ok: false, error: 'PET_REQUIRED' };
  if (!petType) return { ok: false, error: 'PET_TYPE_REQUIRED' };
  if (body.consent !== true) return { ok: false, error: 'CONSENT_REQUIRED' };

  return { ok: true, common: { owner, phone, pet, petType } };
}

export function validateBooking(body = {}) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'BODY_INVALID' };
  }

  if (text(body.website, 1)) return { ok: false, error: 'BOT_REJECTED' };

  const type = text(body.type, 20);
  if (!ALLOWED_TYPES.includes(type)) return { ok: false, error: 'TYPE_INVALID' };

  const common = validateCommon(body);
  if (!common.ok) return common;

  const base = {
    type,
    ...common.common,
    code: /^LUMI-(CARE|HOTEL)-\d{8}-[A-Z0-9]{4}$/.test(String(body.code || ''))
      ? String(body.code)
      : '',
    note: text(body.note, 1200),
    source: text(body.source || 'website', 80)
  };

  if (type === 'appointment') {
    const service = text(body.service, 120);
    const date = text(body.date, 10);
    const time = text(body.time, 5);
    const weight = body.weight === '' || body.weight == null ? null : Number(body.weight);

    if (!service) return { ok: false, error: 'SERVICE_REQUIRED' };
    if (!isIsoDate(date)) return { ok: false, error: 'DATE_INVALID' };
    if (!isTime(time)) return { ok: false, error: 'TIME_INVALID' };
    if (weight != null && (!Number.isFinite(weight) || weight < 0 || weight > 200)) {
      return { ok: false, error: 'WEIGHT_INVALID' };
    }

    return {
      ok: true,
      data: {
        ...base,
        service,
        appointmentDate: date,
        appointmentTime: time,
        weight: weight == null ? null : Math.round(weight * 10) / 10,
        quantity: 1
      }
    };
  }

  const quantity = Number(body.quantity || 1);
  const checkinDate = text(body.checkinDate, 10);
  const checkinTime = text(body.checkinTime, 5);
  const checkoutDate = text(body.checkoutDate, 10);
  const checkoutTime = text(body.checkoutTime, 5);
  const food = text(body.food, 1200);

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    return { ok: false, error: 'QUANTITY_INVALID' };
  }
  if (!isIsoDate(checkinDate) || !isIsoDate(checkoutDate)) {
    return { ok: false, error: 'DATE_INVALID' };
  }
  if (!isTime(checkinTime) || !isTime(checkoutTime)) {
    return { ok: false, error: 'TIME_INVALID' };
  }

  const nights = calcNights(checkinDate, checkoutDate);
  if (!nights || nights < 1 || nights > 365) {
    return { ok: false, error: 'HOTEL_DATE_RANGE_INVALID' };
  }

  const start = Date.parse(`${checkinDate}T${checkinTime}:00Z`);
  const end = Date.parse(`${checkoutDate}T${checkoutTime}:00Z`);
  if (!(end > start)) return { ok: false, error: 'HOTEL_TIME_RANGE_INVALID' };

  return {
    ok: true,
    data: {
      ...base,
      quantity,
      checkinDate,
      checkinTime,
      checkoutDate,
      checkoutTime,
      nights,
      food
    }
  };
}

export function sanitizeStatus(value) {
  const status = text(value, 40).toUpperCase();
  return ALLOWED_STATUSES.includes(status) ? status : null;
}

export function sanitizeSettingValue(key, value) {
  const numericKeys = new Set([
    'price_bathSpa',
    'price_grooming',
    'price_bathGrooming',
    'price_hotelPerNight',
    'price_earCleaning',
    'price_glandCleaning',
    'hotel_capacity'
  ]);
  const booleanKeys = new Set(['price_published', 'hotel_capacity_published']);
  const textKeys = new Set(['price_note']);

  if (numericKeys.has(key)) {
    if (value === '' || value == null) return '';
    const n = Number(value);
    if (!Number.isFinite(n) || n < 0 || n > 1_000_000_000) return null;
    return String(Math.round(n));
  }
  if (booleanKeys.has(key)) return value === true || value === 'true' ? 'true' : 'false';
  if (textKeys.has(key)) return text(value, 500);
  return null;
}
