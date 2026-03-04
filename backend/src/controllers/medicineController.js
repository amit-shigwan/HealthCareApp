const { addMedicine, getMedicineSchedule, markDoseTaken } = require('../models/medicineModel');
const { sendPushNotification } = require('../services/notificationService');

async function createMedicine(req, res, next) {
  try {
    const data = await addMedicine(req.body);
    res.status(201).json({ message: 'Medicine added', data });
  } catch (error) {
    next(error);
  }
}

async function getSchedule(req, res, next) {
  try {
    const data = await getMedicineSchedule(req.params.patient_id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

async function updateDoseTaken(req, res, next) {
  try {
    const { schedule_id, fcm_token } = req.body;
    const data = await markDoseTaken(schedule_id);

    if (fcm_token) {
      await sendPushNotification(fcm_token, 'Dose marked as taken', 'Great job! Keep following your schedule.');
    }

    res.json({ message: 'Dose updated', data });
  } catch (error) {
    next(error);
  }
}

module.exports = { createMedicine, getSchedule, updateDoseTaken };
