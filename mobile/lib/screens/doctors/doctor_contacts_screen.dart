import 'package:flutter/material.dart';

class DoctorContactsScreen extends StatelessWidget {
  const DoctorContactsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Doctor Contacts')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          ElevatedButton(onPressed: () {}, child: const Text('Add Doctor')),
          const ListTile(
            title: Text('Dr. Mehta - Cardiologist'),
            subtitle: Text('City Heart Clinic\n+91 9000000000'),
            trailing: Icon(Icons.call),
          )
        ],
      ),
    );
  }
}
