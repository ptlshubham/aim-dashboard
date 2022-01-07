import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { LoginUser } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(    
    private httpClient: HttpClient,
	
  ) { }
  login(data: LoginUser): Observable<any> {
	return this.httpClient.post<any>(ApiService.saveLoginURL, data);
}
}