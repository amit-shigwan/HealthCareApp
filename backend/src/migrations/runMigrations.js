require('dotenv').config();
const fs = require('fs');
const path = require('path');
const db = require('../config/db');

async function run() {
  const sql = fs.readFileSync(path.join(__dirname, '001_init.sql'), 'utf8');
  await db.query(sql);
  console.log('Migrations executed successfully');
  process.exit(0);
}

run().catch((error) => {
  console.error('Migration failed', error);
  process.exit(1);
});
