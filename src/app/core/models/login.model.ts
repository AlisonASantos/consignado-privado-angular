export interface AuthenticateUserRequest {
  email: string;
  password: string;
}

export interface AuthenticateUserResponse {
  userId: string;
  fullName: string;
  email: string;
  role: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  errors: string[];
}

export interface ApiResponseWithData<T> extends ApiResponse {
  data: T;
}
