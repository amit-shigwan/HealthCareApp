import 'package:flutter/material.dart';
import '../../widgets/large_action_button.dart';

class HomeDashboardScreen extends StatelessWidget {
  const HomeDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home Dashboard')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            LargeActionButton(label: 'My Medical Records', onPressed: () => Navigator.pushNamed(context, '/medical-records')),
            LargeActionButton(label: 'Medicine Tracker', onPressed: () => Navigator.pushNamed(context, '/medicine-tracker')),
            LargeActionButton(label: 'Medical Reports', onPressed: () => Navigator.pushNamed(context, '/medical-reports')),
            LargeActionButton(label: 'Doctor Contacts', onPressed: () => Navigator.pushNamed(context, '/doctor-contacts')),
            LargeActionButton(label: 'Emergency Info', onPressed: () => Navigator.pushNamed(context, '/emergency-info')),
          ],
        ),
      ),
    );
  }
}
