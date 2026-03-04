const multer = require('multer');
const {
  createMedicalRecord,
  getRecordsByPatientId,
  deleteRecord,
  createMedicalReport,
  getReportHistory
} = require('../models/medicalModel');
const { uploadFile } = require('../services/storageService');

const upload = multer({ storage: multer.memoryStorage() });

const uploadSingle = upload.single('file');

async function uploadRecord(req, res, next) {
  try {
    const fileUrl = req.file ? await uploadFile(req.file, 'records') : null;
    const record = await createMedicalRecord({ ...req.body, file_url: fileUrl });
    res.status(201).json({ message: 'Record uploaded', data: record });
  } catch (error) {
    next(error);
  }
}

async function getRecords(req, res, next) {
  try {
    const data = await getRecordsByPatientId(req.params.patient_id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

async function removeRecord(req, res, next) {
  try {
    await deleteRecord(req.params.record_id);
    res.json({ message: 'Record deleted' });
  } catch (error) {
    next(error);
  }
}

async function uploadReport(req, res, next) {
  try {
    const fileUrl = req.file ? await uploadFile(req.file, 'reports') : null;
    const report = await createMedicalReport({ ...req.body, report_file_url: fileUrl });
    res.status(201).json({ message: 'Report uploaded', data: report });
  } catch (error) {
    next(error);
  }
}

async function getReportHistoryByPatient(req, res, next) {
  try {
    const data = await getReportHistory(req.params.patient_id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  uploadSingle,
  uploadRecord,
  getRecords,
  removeRecord,
  uploadReport,
  getReportHistoryByPatient
};
