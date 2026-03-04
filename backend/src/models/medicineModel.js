const db = require('../config/db');

async function addMedicine(payload) {
  const query = `
    INSERT INTO medicines
    (patient_id, medicine_name, dosage, frequency, start_date, end_date, doctor_id, notes)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *
  `;
  const { rows } = await db.query(query, [
    payload.patient_id,
    payload.medicine_name,
    payload.dosage,
    payload.frequency,
    payload.start_date,
    payload.end_date,
    payload.doctor_id,
    payload.notes
  ]);
  return rows[0];
}

async function getMedicineSchedule(patientId) {
  const query = `
    SELECT m.*, ms.schedule_id, ms.dose_time, ms.taken_status, ms.taken_at
    FROM medicines m
    LEFT JOIN medicine_schedule ms ON ms.medicine_id = m.medicine_id
    WHERE m.patient_id = $1
    ORDER BY ms.dose_time ASC
  `;
  const { rows } = await db.query(query, [patientId]);
  return rows;
}

async function markDoseTaken(scheduleId) {
  const { rows } = await db.query(
    'UPDATE medicine_schedule SET taken_status = true, taken_at = NOW() WHERE schedule_id = $1 RETURNING *',
    [scheduleId]
  );
  return rows[0];
}

module.exports = { addMedicine, getMedicineSchedule, markDoseTaken };
