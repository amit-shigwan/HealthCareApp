const { v4: uuidv4 } = require('uuid');

const otpStore = new Map();

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function createOtpSession(mobileNumber) {
  const otp = generateOtp();
  const sessionId = uuidv4();
  const expiryMs = Number(process.env.OTP_EXPIRY_MINUTES || 5) * 60 * 1000;

  otpStore.set(sessionId, {
    mobileNumber,
    otp,
    expiresAt: Date.now() + expiryMs
  });

  // In production, send OTP via SMS gateway provider.
  console.log(`[OTP] mobile=${mobileNumber} otp=${otp}`);

  return { sessionId, otp }; // otp returned for demo/test only.
}

function verifyOtpSession(sessionId, otp) {
  const session = otpStore.get(sessionId);
  if (!session) return { valid: false, reason: 'Session not found' };
  if (Date.now() > session.expiresAt) return { valid: false, reason: 'OTP expired' };
  if (session.otp !== otp) return { valid: false, reason: 'Invalid OTP' };

  otpStore.delete(sessionId);
  return { valid: true, mobileNumber: session.mobileNumber };
}

module.exports = { createOtpSession, verifyOtpSession };
