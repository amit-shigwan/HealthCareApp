const db = require('../config/db');

async function upsertUserByMobile(mobileNumber) {
  const query = `
    INSERT INTO users (mobile_number, otp_verified)
    VALUES ($1, true)
    ON CONFLICT (mobile_number)
    DO UPDATE SET otp_verified = true, last_login = NOW()
    RETURNING user_id, mobile_number, otp_verified, created_at, last_login
  `;
  const { rows } = await db.query(query, [mobileNumber]);
  return rows[0];
}

module.exports = { upsertUserByMobile };
