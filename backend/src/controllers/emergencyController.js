const { getEmergencyInfo, upsertEmergencyInfo } = require('../models/emergencyModel');

async function fetchEmergencyInfo(req, res, next) {
  try {
    const data = await getEmergencyInfo(req.params.patient_id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

async function updateEmergencyInfo(req, res, next) {
  try {
    const data = await upsertEmergencyInfo(req.body);
    res.json({ message: 'Emergency info updated', data });
  } catch (error) {
    next(error);
  }
}

module.exports = { fetchEmergencyInfo, updateEmergencyInfo };
