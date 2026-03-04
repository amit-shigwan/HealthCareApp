# Full Project Folder Structure

```text
HealthCareApp/
├── backend/
│   ├── .env.example
│   ├── Dockerfile
│   ├── README.md
│   ├── package.json
│   └── src/
│       ├── config/
│       │   ├── db.js
│       │   └── firebase.js
│       ├── controllers/
│       │   ├── authController.js
│       │   ├── doctorController.js
│       │   ├── emergencyController.js
│       │   ├── medicalController.js
│       │   ├── medicineController.js
│       │   └── profileController.js
│       ├── docs/
│       │   └── api-examples.md
│       ├── middleware/
│       │   └── authMiddleware.js
│       ├── migrations/
│       │   ├── 001_init.sql
│       │   └── runMigrations.js
│       ├── models/
│       │   ├── doctorModel.js
│       │   ├── emergencyModel.js
│       │   ├── medicalModel.js
│       │   ├── medicineModel.js
│       │   ├── profileModel.js
│       │   └── userModel.js
│       ├── routes/
│       │   ├── authRoutes.js
│       │   ├── doctorRoutes.js
│       │   ├── emergencyRoutes.js
│       │   ├── medicalRoutes.js
│       │   ├── medicineRoutes.js
│       │   └── profileRoutes.js
│       ├── services/
│       │   ├── notificationService.js
│       │   ├── otpService.js
│       │   └── storageService.js
│       ├── utils/
│       │   └── jwt.js
│       └── server.js
├── mobile/
│   ├── README.md
│   ├── analysis_options.yaml
│   ├── pubspec.yaml
│   └── lib/
│       ├── core/
│       │   ├── api/api_client.dart
│       │   ├── constants/app_constants.dart
│       │   └── theme/app_theme.dart
│       ├── screens/
│       │   ├── auth/
│       │   │   ├── launch_screen.dart
│       │   │   ├── login_screen.dart
│       │   │   └── otp_screen.dart
│       │   ├── doctors/doctor_contacts_screen.dart
│       │   ├── emergency/emergency_info_screen.dart
│       │   ├── home/home_dashboard_screen.dart
│       │   ├── medicine/medicine_tracker_screen.dart
│       │   ├── profile/profile_setup_screen.dart
│       │   ├── records/medical_records_screen.dart
│       │   └── reports/medical_reports_screen.dart
│       ├── services/auth_service.dart
│       ├── widgets/large_action_button.dart
│       └── main.dart
├── PROJECT_STRUCTURE.md
├── README.md
└── docker-compose.yml
```
