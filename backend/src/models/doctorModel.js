const db = require('../config/db');

async function addDoctor(payload) {
  const query = `
    INSERT INTO doctors
    (patient_id, doctor_name, specialization, hospital_name, clinic_address, contact_number, consultation_notes)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *
  `;
  const { rows } = await db.query(query, [
    payload.patient_id,
    payload.doctor_name,
    payload.specialization,
    payload.hospital_name,
    payload.clinic_address,
    payload.contact_number,
    payload.consultation_notes
  ]);
  return rows[0];
}

async function getDoctorList(patientId) {
  const { rows } = await db.query('SELECT * FROM doctors WHERE patient_id = $1 ORDER BY doctor_name ASC', [patientId]);
  return rows;
}

module.exports = { addDoctor, getDoctorList };
