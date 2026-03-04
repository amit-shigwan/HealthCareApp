import '../core/api/api_client.dart';

class AuthService {
  final ApiClient _apiClient = ApiClient();

  Future<Map<String, dynamic>> requestOtp(String mobileNumber) {
    return _apiClient.post('/auth/login', {'mobile_number': mobileNumber});
  }

  Future<Map<String, dynamic>> verifyOtp(String sessionId, String otp) {
    return _apiClient.post('/auth/verify-otp', {'session_id': sessionId, 'otp': otp});
  }
}
