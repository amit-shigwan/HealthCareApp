const { addDoctor, getDoctorList } = require('../models/doctorModel');

async function createDoctor(req, res, next) {
  try {
    const data = await addDoctor(req.body);
    res.status(201).json({ message: 'Doctor added', data });
  } catch (error) {
    next(error);
  }
}

async function listDoctors(req, res, next) {
  try {
    const data = await getDoctorList(req.params.patient_id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

module.exports = { createDoctor, listDoctors };
