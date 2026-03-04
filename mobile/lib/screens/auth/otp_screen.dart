import 'package:flutter/material.dart';
import '../../services/auth_service.dart';

class OtpScreen extends StatefulWidget {
  const OtpScreen({super.key});

  @override
  State<OtpScreen> createState() => _OtpScreenState();
}

class _OtpScreenState extends State<OtpScreen> {
  final _otpController = TextEditingController();
  final _authService = AuthService();

  Future<void> _verify(String sessionId) async {
    await _authService.verifyOtp(sessionId, _otpController.text.trim());
    if (!mounted) return;
    Navigator.pushReplacementNamed(context, '/profile-setup');
  }

  @override
  Widget build(BuildContext context) {
    final sessionId = ModalRoute.of(context)!.settings.arguments as String;

    return Scaffold(
      appBar: AppBar(title: const Text('Verify OTP')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(controller: _otpController, keyboardType: TextInputType.number, decoration: const InputDecoration(labelText: 'Enter OTP')),
            const SizedBox(height: 16),
            ElevatedButton(onPressed: () => _verify(sessionId), child: const Text('Verify')),
          ],
        ),
      ),
    );
  }
}
