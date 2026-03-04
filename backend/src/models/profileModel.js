const db = require('../config/db');

async function getProfileByUserId(userId) {
  const { rows } = await db.query('SELECT * FROM patient_profiles WHERE user_id = $1', [userId]);
  return rows[0] || null;
}

async function upsertProfile(userId, payload) {
  const query = `
    INSERT INTO patient_profiles (
      user_id, full_name, date_of_birth, gender, blood_group,
      chronic_conditions, allergies, current_medications, abha_id
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    ON CONFLICT (user_id)
    DO UPDATE SET
      full_name = EXCLUDED.full_name,
      date_of_birth = EXCLUDED.date_of_birth,
      gender = EXCLUDED.gender,
      blood_group = EXCLUDED.blood_group,
      chronic_conditions = EXCLUDED.chronic_conditions,
      allergies = EXCLUDED.allergies,
      current_medications = EXCLUDED.current_medications,
      abha_id = EXCLUDED.abha_id
    RETURNING *
  `;
  const values = [
    userId,
    payload.full_name,
    payload.date_of_birth,
    payload.gender,
    payload.blood_group,
    payload.chronic_conditions,
    payload.allergies,
    payload.current_medications,
    payload.abha_id
  ];
  const { rows } = await db.query(query, values);
  return rows[0];
}

module.exports = { getProfileByUserId, upsertProfile };
