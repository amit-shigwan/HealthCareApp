import 'package:flutter/material.dart';

class MedicalReportsScreen extends StatelessWidget {
  const MedicalReportsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Medical Reports History')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          ListTile(title: Text('Lipid Profile'), subtitle: Text('2026-01-01')),
          ListTile(title: Text('Thyroid Panel'), subtitle: Text('2025-12-12')),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(onPressed: () {}, label: const Text('Upload Report')),
    );
  }
}
