import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { LoginUser } from './login.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

	loading:boolean=false;
	// loginForm: FormGroup;
	public loginModel: LoginUser = new LoginUser();
	public login: LoginUser[] = [];
  
  constructor(
	  private router:Router,
	  private loginService:LoginService,
	  private apiService:ApiService
  ) { 
	  localStorage.clear();
  }

  ngOnInit(): void {
  }
  openDashboard() {
    // this.router.navigate(['/main/main']);
  }
  loginUser() {
    this.loginModel;
    this.router.navigate(['dashboard']);
    debugger

    // this.loginService.login(this.loginModel).subscribe(data => {
    //   this.login = data;
	  // let token = data.token ? data.token : '';
		// 	// let payload = token ? jwtHelper.decodeToken(token) : {};

		// 	// remove the characters "Bearer " from the front
		// 	// as the JWT library adds that to each request anyway
		// 	// token = token.split(' ')[1];

		// 	localStorage.setItem('roles', data.roles ? data.roles : []);
		// 	localStorage.setItem('customers', data.organizations ? data.organizations : []);
		// 	localStorage.setItem('username', this.loginModel.username);
		// 	// localStorage.setItem('engineerId', _.get(payload, 'app_metadata.engineerId', ''));
		// 	localStorage.setItem('token', token);
		// 	localStorage.setItem('isLoggedIn', 'true');
	  
    //  this.router.navigate(['dashboard']);
    // });
  }

  

}
