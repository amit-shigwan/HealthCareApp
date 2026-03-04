require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initializeFirebase } = require('./config/firebase');
const { ensureBucket } = require('./services/storageService');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'patient-health-companion-backend' });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/profileRoutes'));
app.use('/api', require('./routes/medicalRoutes'));
app.use('/api', require('./routes/medicineRoutes'));
app.use('/api', require('./routes/doctorRoutes'));
app.use('/api', require('./routes/emergencyRoutes'));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 8080;

(async () => {
  try {
    initializeFirebase();
    await ensureBucket();
    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Startup error:', error.message);
    process.exit(1);
  }
})();
