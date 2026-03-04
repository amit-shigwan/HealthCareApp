CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  mobile_number VARCHAR(20) UNIQUE NOT NULL,
  otp_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patient_profiles (
  patient_id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
  full_name VARCHAR(150) NOT NULL,
  date_of_birth DATE,
  gender VARCHAR(20),
  blood_group VARCHAR(10),
  chronic_conditions TEXT,
  allergies TEXT,
  current_medications TEXT,
  abha_id VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS doctors (
  doctor_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  doctor_name VARCHAR(150) NOT NULL,
  specialization VARCHAR(120),
  hospital_name VARCHAR(150),
  clinic_address TEXT,
  contact_number VARCHAR(20),
  consultation_notes TEXT
);

CREATE TABLE IF NOT EXISTS medical_records (
  record_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  record_type VARCHAR(50) NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  doctor_id INTEGER REFERENCES doctors(doctor_id) ON DELETE SET NULL,
  hospital_name VARCHAR(150),
  file_url TEXT,
  record_date DATE,
  uploaded_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS medical_reports (
  report_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  report_type VARCHAR(100) NOT NULL,
  report_date DATE,
  lab_name VARCHAR(150),
  report_file_url TEXT,
  doctor_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS health_metrics (
  metric_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  metric_type VARCHAR(100),
  metric_value VARCHAR(100),
  unit VARCHAR(20),
  recorded_date DATE
);

CREATE TABLE IF NOT EXISTS medicines (
  medicine_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  medicine_name VARCHAR(150) NOT NULL,
  dosage VARCHAR(100),
  frequency VARCHAR(100),
  start_date DATE,
  end_date DATE,
  doctor_id INTEGER REFERENCES doctors(doctor_id) ON DELETE SET NULL,
  notes TEXT
);

CREATE TABLE IF NOT EXISTS medicine_schedule (
  schedule_id SERIAL PRIMARY KEY,
  medicine_id INTEGER REFERENCES medicines(medicine_id) ON DELETE CASCADE,
  dose_time TIMESTAMP,
  taken_status BOOLEAN DEFAULT FALSE,
  taken_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS doctor_visits (
  visit_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  doctor_id INTEGER REFERENCES doctors(doctor_id) ON DELETE SET NULL,
  visit_date DATE,
  diagnosis TEXT,
  prescription_record_id INTEGER REFERENCES medical_records(record_id) ON DELETE SET NULL,
  notes TEXT
);

CREATE TABLE IF NOT EXISTS emergency_info (
  emergency_id SERIAL PRIMARY KEY,
  patient_id INTEGER UNIQUE REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  blood_group VARCHAR(10),
  allergies TEXT,
  current_medications TEXT,
  emergency_contact_name VARCHAR(150),
  emergency_contact_phone VARCHAR(20),
  relationship VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS notifications (
  notification_id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patient_profiles(patient_id) ON DELETE CASCADE,
  notification_type VARCHAR(80),
  message TEXT,
  scheduled_time TIMESTAMP,
  status VARCHAR(20) DEFAULT 'pending'
);
