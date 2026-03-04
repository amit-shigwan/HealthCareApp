const router = require('express').Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const { createDoctor, listDoctors } = require('../controllers/doctorController');

router.post('/add-doctor', authenticateToken, createDoctor);
router.get('/doctor-list/:patient_id', authenticateToken, listDoctors);

module.exports = router;
