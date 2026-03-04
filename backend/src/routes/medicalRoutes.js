const router = require('express').Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const {
  uploadSingle,
  uploadRecord,
  getRecords,
  removeRecord,
  uploadReport,
  getReportHistoryByPatient
} = require('../controllers/medicalController');

router.post('/upload-record', authenticateToken, uploadSingle, uploadRecord);
router.get('/records/:patient_id', authenticateToken, getRecords);
router.delete('/record/:record_id', authenticateToken, removeRecord);
router.post('/upload-report', authenticateToken, uploadSingle, uploadReport);
router.get('/report-history/:patient_id', authenticateToken, getReportHistoryByPatient);

module.exports = router;
