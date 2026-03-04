const { createOtpSession, verifyOtpSession } = require('../services/otpService');
const { upsertUserByMobile } = require('../models/userModel');
const { signAccessToken } = require('../utils/jwt');

async function register(req, res, next) {
  try {
    const { mobile_number } = req.body;
    const session = createOtpSession(mobile_number);
    res.json({ message: 'OTP sent successfully', session_id: session.sessionId, demo_otp: session.otp });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { mobile_number } = req.body;
    const session = createOtpSession(mobile_number);
    res.json({ message: 'OTP sent successfully', session_id: session.sessionId, demo_otp: session.otp });
  } catch (error) {
    next(error);
  }
}

async function verifyOtp(req, res, next) {
  try {
    const { session_id, otp } = req.body;
    const result = verifyOtpSession(session_id, otp);

    if (!result.valid) {
      return res.status(400).json({ message: result.reason });
    }

    const user = await upsertUserByMobile(result.mobileNumber);
    const token = signAccessToken({ user_id: user.user_id, mobile_number: user.mobile_number });

    return res.json({
      message: 'OTP verified successfully',
      access_token: token,
      user
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = { register, login, verifyOtp };
