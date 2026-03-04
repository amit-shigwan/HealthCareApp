const admin = require('firebase-admin');

let initialized = false;

function initializeFirebase() {
  if (initialized) return;

  const projectId = process.env.FCM_PROJECT_ID;
  const clientEmail = process.env.FCM_CLIENT_EMAIL;
  const privateKey = (process.env.FCM_PRIVATE_KEY || '').replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey || privateKey.includes('...')) {
    console.log('FCM credentials not configured, notifications will be logged only.');
    return;
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey
    })
  });

  initialized = true;
}

module.exports = { admin, initializeFirebase };
