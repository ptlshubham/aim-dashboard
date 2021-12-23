import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoginUser } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginModel: LoginUser = new LoginUser();
  public login: LoginUser[] = [];
  constructor(
    private router: Router,
    private loginService: LoginService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.loginModel;
    debugger

    this.loginService.login(this.loginModel).subscribe(data => {
      this.login = data;
      this.router.navigate(['main']);
    });
  }
}
