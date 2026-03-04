const db = require('../config/db');

async function createMedicalRecord(payload) {
  const query = `
    INSERT INTO medical_records
    (patient_id, record_type, title, description, doctor_id, hospital_name, file_url, record_date)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *
  `;
  const { rows } = await db.query(query, [
    payload.patient_id,
    payload.record_type,
    payload.title,
    payload.description,
    payload.doctor_id,
    payload.hospital_name,
    payload.file_url,
    payload.record_date
  ]);
  return rows[0];
}

async function getRecordsByPatientId(patientId) {
  const { rows } = await db.query('SELECT * FROM medical_records WHERE patient_id = $1 ORDER BY record_date DESC', [patientId]);
  return rows;
}

async function deleteRecord(recordId) {
  await db.query('DELETE FROM medical_records WHERE record_id = $1', [recordId]);
}

async function createMedicalReport(payload) {
  const query = `
    INSERT INTO medical_reports
    (patient_id, report_type, report_date, lab_name, report_file_url, doctor_notes)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
  `;
  const { rows } = await db.query(query, [
    payload.patient_id,
    payload.report_type,
    payload.report_date,
    payload.lab_name,
    payload.report_file_url,
    payload.doctor_notes
  ]);
  return rows[0];
}

async function getReportHistory(patientId) {
  const { rows } = await db.query('SELECT * FROM medical_reports WHERE patient_id = $1 ORDER BY report_date DESC', [patientId]);
  return rows;
}

module.exports = {
  createMedicalRecord,
  getRecordsByPatientId,
  deleteRecord,
  createMedicalReport,
  getReportHistory
};
