import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environment/environment.develop';
import {
  ApiResponseWithData,
  AuthenticateUserRequest,
  AuthenticateUserResponse,
} from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient){  }
  
  private readonly baseUrl = `${environment.apiUrl}/auth`;

  login(request: AuthenticateUserRequest) : Observable<ApiResponseWithData<AuthenticateUserResponse>> 
  {
    debugger;
    return this.http.post<ApiResponseWithData<AuthenticateUserResponse>>(this.baseUrl, request);
  }
}