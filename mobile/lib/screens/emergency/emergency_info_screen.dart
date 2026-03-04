import 'package:flutter/material.dart';

class EmergencyInfoScreen extends StatelessWidget {
  const EmergencyInfoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Emergency Information')),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: Card(
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Blood Group: B+'),
                SizedBox(height: 8),
                Text('Allergies: Penicillin'),
                SizedBox(height: 8),
                Text('Current Medicines: Amlodipine'),
                SizedBox(height: 8),
                Text('Emergency Contact: Ramesh (+91 9888888888)'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
