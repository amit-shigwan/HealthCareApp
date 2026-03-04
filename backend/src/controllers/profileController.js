const { getProfileByUserId, upsertProfile } = require('../models/profileModel');

async function getProfile(req, res, next) {
  try {
    const profile = await getProfileByUserId(req.user.user_id);
    res.json({ data: profile });
  } catch (error) {
    next(error);
  }
}

async function updateProfile(req, res, next) {
  try {
    const profile = await upsertProfile(req.user.user_id, req.body);
    res.json({ message: 'Profile updated', data: profile });
  } catch (error) {
    next(error);
  }
}

module.exports = { getProfile, updateProfile };
