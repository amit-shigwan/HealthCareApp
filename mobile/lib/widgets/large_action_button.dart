import 'package:flutter/material.dart';

class LargeActionButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;

  const LargeActionButton({super.key, required this.label, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: ElevatedButton(
        onPressed: onPressed,
        child: Text(label),
      ),
    );
  }
}
