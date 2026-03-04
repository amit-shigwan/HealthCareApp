import 'package:flutter/material.dart';

class MedicalRecordsScreen extends StatelessWidget {
  const MedicalRecordsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Medical Records')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          TextField(decoration: InputDecoration(labelText: 'Search records')),
          SizedBox(height: 12),
          ListTile(title: Text('Prescription'), subtitle: Text('Cardiology visit')), 
          ListTile(title: Text('Lab Report'), subtitle: Text('Blood test Jan 2026')),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(onPressed: () {}, label: const Text('Upload Record')),
    );
  }
}
