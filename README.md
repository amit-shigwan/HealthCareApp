# Patient Health Companion (MVP Skeleton)

Production-ready starter skeleton for a **Flutter mobile app** + **Node.js/Express backend** + **PostgreSQL** + **S3-compatible file storage** + **FCM notifications**.

## Monorepo Structure

```text
.
├── backend/                 # Node.js + Express API
├── mobile/                  # Flutter app skeleton
├── docker-compose.yml       # Local orchestration
└── README.md
```

## Core Modules

1. Authentication (OTP + JWT)
2. Patient Profile Management
3. Medical Records Management
4. Medical Reports History
5. Medicine Tracker
6. Doctor Contacts
7. Emergency Information
8. Notification Service (FCM)

## Quick Start (Local)

### 1) Start infrastructure

```bash
docker compose up -d postgres minio
```

### 2) Backend setup

```bash
cd backend
cp .env.example .env
npm install
npm run migrate
npm run dev
```

### 3) Flutter setup

```bash
cd mobile
flutter pub get
flutter run
```

## Security Notes

- Use HTTPS in production (via reverse proxy/load balancer).
- Keep JWT secret and cloud credentials in secure secret manager.
- OTP implementation is mocked in this skeleton; replace with SMS provider in production.

## API Examples

See: `backend/src/docs/api-examples.md`

## Deployment

- Backend containerized with Docker
- Postgres via Docker compose
- MinIO provided as local S3-compatible storage
- FCM integration scaffold included
