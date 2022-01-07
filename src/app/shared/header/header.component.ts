import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	isLoggedin:boolean=false;
	activeclassreq:any;
	activeclassdash:any;
	constructor(
		private router:Router
	) { 
		
	}

	ngOnInit() {
	}

	isDashboard() {
		return true;
		// $state.current.name.includes('dashboard'); 
	}
	isRequest() {
		return true;
		// ['inspection-request', 'organization'].some(state => $state.current.name.includes(state));
	}
	isLoggedIn() {
		//  UserService.isLoggedIn();
	}

	checkPermission(permission: string) {
		// AuthService.userHasPermission
	};
	userHasAnyOfPermissions(...permission: any) {
		// = AuthService.userHasAnyOfPermissions;
	}
	opendashboard(){
		
		this.activeclassreq='';
		this.activeclassdash='is-active';
	}


	logout() {
		localStorage.clear();
		this.router.navigate(['login'])
		// UserService.logout();
		// $state.go('login');
	}

	onBrandClicked() {
		// $state.go('inspection-request/search/basic', {}, { inherit: false });

	}
}