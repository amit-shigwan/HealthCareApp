const router = require('express').Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const { fetchEmergencyInfo, updateEmergencyInfo } = require('../controllers/emergencyController');

router.get('/emergency-info/:patient_id', authenticateToken, fetchEmergencyInfo);
router.put('/update-emergency-info', authenticateToken, updateEmergencyInfo);

module.exports = router;
