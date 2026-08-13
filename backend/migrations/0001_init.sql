PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS bookings (
  code TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('appointment','hotel')),
  status TEXT NOT NULL DEFAULT 'PENDING_CONFIRMATION'
    CHECK (status IN ('PENDING_CONFIRMATION','CONFIRMED','COMPLETED','CANCELLED','NO_SHOW')),
  owner_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  pet_name TEXT NOT NULL,
  pet_type TEXT NOT NULL,
  weight_kg REAL,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity BETWEEN 1 AND 10),
  service TEXT,
  appointment_date TEXT,
  appointment_time TEXT,
  checkin_date TEXT,
  checkin_time TEXT,
  checkout_date TEXT,
  checkout_time TEXT,
  nights INTEGER,
  food_notes TEXT,
  note TEXT,
  source TEXT NOT NULL DEFAULT 'website',
  price_quote INTEGER,
  admin_note TEXT
);

CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status_type ON bookings(status, type);
CREATE INDEX IF NOT EXISTS idx_bookings_appointment_date ON bookings(appointment_date);
CREATE INDEX IF NOT EXISTS idx_bookings_hotel_range ON bookings(checkin_date, checkout_date);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

INSERT OR IGNORE INTO settings(key,value,updated_at) VALUES
  ('price_published','false',datetime('now')),
  ('price_note','Giá được Lumi xác nhận theo thông tin thực tế của bé.',datetime('now')),
  ('price_bathSpa','',datetime('now')),
  ('price_grooming','',datetime('now')),
  ('price_bathGrooming','',datetime('now')),
  ('price_hotelPerNight','',datetime('now')),
  ('price_earCleaning','',datetime('now')),
  ('price_glandCleaning','',datetime('now')),
  ('hotel_capacity','',datetime('now')),
  ('hotel_capacity_published','false',datetime('now'));
