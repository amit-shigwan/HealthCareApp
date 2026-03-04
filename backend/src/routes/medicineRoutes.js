const router = require('express').Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const { createMedicine, getSchedule, updateDoseTaken } = require('../controllers/medicineController');

router.post('/add-medicine', authenticateToken, createMedicine);
router.get('/medicine-schedule/:patient_id', authenticateToken, getSchedule);
router.put('/mark-dose-taken', authenticateToken, updateDoseTaken);

module.exports = router;
