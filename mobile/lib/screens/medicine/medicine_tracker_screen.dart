import 'package:flutter/material.dart';

class MedicineTrackerScreen extends StatelessWidget {
  const MedicineTrackerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Medicine Tracker')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          ElevatedButton(onPressed: () {}, child: const Text('Add Medicine')),
          const SizedBox(height: 12),
          Card(
            child: ListTile(
              title: const Text('Amlodipine 5mg'),
              subtitle: const Text('8:00 AM / 8:00 PM'),
              trailing: ElevatedButton(onPressed: () {}, child: const Text('Taken')),
            ),
          )
        ],
      ),
    );
  }
}
