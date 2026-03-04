const router = require('express').Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const { getProfile, updateProfile } = require('../controllers/profileController');

router.get('/profile', authenticateToken, getProfile);
router.put('/update-profile', authenticateToken, updateProfile);

module.exports = router;
