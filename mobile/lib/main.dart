import 'package:flutter/material.dart';
import 'core/theme/app_theme.dart';
import 'screens/auth/launch_screen.dart';
import 'screens/auth/login_screen.dart';
import 'screens/auth/otp_screen.dart';
import 'screens/profile/profile_setup_screen.dart';
import 'screens/home/home_dashboard_screen.dart';
import 'screens/records/medical_records_screen.dart';
import 'screens/medicine/medicine_tracker_screen.dart';
import 'screens/reports/medical_reports_screen.dart';
import 'screens/doctors/doctor_contacts_screen.dart';
import 'screens/emergency/emergency_info_screen.dart';

void main() {
  runApp(const PatientHealthCompanionApp());
}

class PatientHealthCompanionApp extends StatelessWidget {
  const PatientHealthCompanionApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Patient Health Companion',
      theme: AppTheme.lightTheme,
      initialRoute: '/',
      routes: {
        '/': (_) => const LaunchScreen(),
        '/login': (_) => const LoginScreen(),
        '/otp': (_) => const OtpScreen(),
        '/profile-setup': (_) => const ProfileSetupScreen(),
        '/home': (_) => const HomeDashboardScreen(),
        '/medical-records': (_) => const MedicalRecordsScreen(),
        '/medicine-tracker': (_) => const MedicineTrackerScreen(),
        '/medical-reports': (_) => const MedicalReportsScreen(),
        '/doctor-contacts': (_) => const DoctorContactsScreen(),
        '/emergency-info': (_) => const EmergencyInfoScreen(),
      },
    );
  }
}
