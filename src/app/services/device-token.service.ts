// device-token.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceTokenService {
    private apiUrl = `http://localhost:3000/api`;

  constructor(private http: HttpClient) {}

  saveDeviceToken(token: string): Observable<any> {
    return this.http.post(this.apiUrl, { token });
  }
}
