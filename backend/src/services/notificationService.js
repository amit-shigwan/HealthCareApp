const { admin } = require('../config/firebase');

async function sendPushNotification(fcmToken, title, body, data = {}) {
  if (!admin.apps.length) {
    console.log('[FCM MOCK]', { fcmToken, title, body, data });
    return { mocked: true };
  }

  return admin.messaging().send({
    token: fcmToken,
    notification: { title, body },
    data
  });
}

module.exports = { sendPushNotification };
