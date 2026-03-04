const db = require('../config/db');

async function getEmergencyInfo(patientId) {
  const { rows } = await db.query('SELECT * FROM emergency_info WHERE patient_id = $1', [patientId]);
  return rows[0] || null;
}

async function upsertEmergencyInfo(payload) {
  const query = `
    INSERT INTO emergency_info
    (patient_id, blood_group, allergies, current_medications, emergency_contact_name, emergency_contact_phone, relationship)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    ON CONFLICT (patient_id)
    DO UPDATE SET
      blood_group = EXCLUDED.blood_group,
      allergies = EXCLUDED.allergies,
      current_medications = EXCLUDED.current_medications,
      emergency_contact_name = EXCLUDED.emergency_contact_name,
      emergency_contact_phone = EXCLUDED.emergency_contact_phone,
      relationship = EXCLUDED.relationship
    RETURNING *
  `;
  const { rows } = await db.query(query, [
    payload.patient_id,
    payload.blood_group,
    payload.allergies,
    payload.current_medications,
    payload.emergency_contact_name,
    payload.emergency_contact_phone,
    payload.relationship
  ]);
  return rows[0];
}

module.exports = { getEmergencyInfo, upsertEmergencyInfo };
