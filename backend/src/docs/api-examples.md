# API Request/Response Examples

Base URL: `http://localhost:8080/api`

## 1) Register

### Request
```http
POST /api/auth/register
Content-Type: application/json

{
  "mobile_number": "+919999999999"
}
```

### Response
```json
{
  "message": "OTP sent successfully",
  "session_id": "uuid-session",
  "demo_otp": "123456"
}
```

## 2) Verify OTP

### Request
```http
POST /api/auth/verify-otp
Content-Type: application/json

{
  "session_id": "uuid-session",
  "otp": "123456"
}
```

### Response
```json
{
  "message": "OTP verified successfully",
  "access_token": "jwt-token",
  "user": {
    "user_id": 1,
    "mobile_number": "+919999999999",
    "otp_verified": true
  }
}
```

## 3) Update Profile

### Request
```http
PUT /api/update-profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "full_name": "Sita Devi",
  "date_of_birth": "1958-10-02",
  "gender": "Female",
  "blood_group": "B+",
  "chronic_conditions": "Hypertension",
  "allergies": "Penicillin",
  "current_medications": "Amlodipine",
  "abha_id": "ABHA-10001"
}
```

### Response
```json
{
  "message": "Profile updated",
  "data": {
    "patient_id": 1,
    "user_id": 1,
    "full_name": "Sita Devi"
  }
}
```

## 4) Upload Medical Record

### Request
`POST /api/upload-record` (multipart/form-data)
- file: binary
- patient_id: 1
- record_type: Prescription
- title: Cardiology OPD
- record_date: 2026-01-12

### Response
```json
{
  "message": "Record uploaded",
  "data": {
    "record_id": 10,
    "file_url": "http://minio:9000/patient-files/records/..."
  }
}
```
