import 'package:flutter/material.dart';
import '../../services/auth_service.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _mobileController = TextEditingController();
  final _authService = AuthService();

  Future<void> _requestOtp() async {
    final response = await _authService.requestOtp(_mobileController.text.trim());
    if (!mounted) return;
    Navigator.pushNamed(context, '/otp', arguments: response['session_id']);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login / Register')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(controller: _mobileController, keyboardType: TextInputType.phone, decoration: const InputDecoration(labelText: 'Mobile Number')),
            const SizedBox(height: 16),
            ElevatedButton(onPressed: _requestOtp, child: const Text('Send OTP')),
          ],
        ),
      ),
    );
  }
}
