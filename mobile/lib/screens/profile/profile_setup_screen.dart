import 'package:flutter/material.dart';

class ProfileSetupScreen extends StatelessWidget {
  const ProfileSetupScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final labels = [
      'Name',
      'Age',
      'Gender',
      'Blood Group',
      'Chronic Conditions',
      'Allergies',
      'Emergency Contact'
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('Patient Profile Setup')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          ...labels.map((label) => Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: TextField(decoration: InputDecoration(labelText: label)),
              )),
          ElevatedButton(
            onPressed: () => Navigator.pushReplacementNamed(context, '/home'),
            child: const Text('Save Profile'),
          )
        ],
      ),
    );
  }
}
