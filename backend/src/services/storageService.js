const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const bucket = process.env.S3_BUCKET;

const s3 = new AWS.S3({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  s3ForcePathStyle: String(process.env.S3_FORCE_PATH_STYLE) === 'true',
  signatureVersion: 'v4'
});

async function ensureBucket() {
  try {
    await s3.headBucket({ Bucket: bucket }).promise();
  } catch (_error) {
    await s3.createBucket({ Bucket: bucket }).promise();
  }
}

async function uploadFile(file, folder = 'uploads') {
  const key = `${folder}/${uuidv4()}-${file.originalname}`;
  await s3
    .putObject({
      Bucket: bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype
    })
    .promise();

  return `${process.env.S3_ENDPOINT}/${bucket}/${key}`;
}

module.exports = { uploadFile, ensureBucket };
