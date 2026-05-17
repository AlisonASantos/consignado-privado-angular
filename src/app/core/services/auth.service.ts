import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environment/environment.develop';
import {
  ApiResponseWithData,
  AuthenticateUserRequest,
  AuthenticateUserResponse
} from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/auth`;

  login(request: AuthenticateUserRequest): Observable<ApiResponseWithData<AuthenticateUserResponse>> {
    return this.http
      .post<ApiResponseWithData<AuthenticateUserResponse>>(this.baseUrl, request)
      .pipe(
        tap(res => {
          if (res.success && res.data?.accessToken) {
            localStorage.setItem('token', res.data.accessToken);
          }
        })
      );
  }
}
