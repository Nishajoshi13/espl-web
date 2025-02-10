// device-token.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceTokenService {
    private apiUrl = `http://localhost:3000/api/customer/token/create`;

  constructor(private http: HttpClient) {}

  saveDeviceToken(customerId: number, token: string, platform: string): Observable<any> {
    const payload = { customer_id: customerId, token: token, platform: platform };

    return this.http.post(this.apiUrl, payload);

  }
}
