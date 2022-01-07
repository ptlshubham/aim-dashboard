import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-globalheader',
  templateUrl: './globalheader.component.html',
  styleUrls: ['./globalheader.component.scss']
})
export class GlobalheaderComponent implements OnInit {

	dashactive: any;
	tryFlag: Boolean = false;
	reqactive: any;
	constructor(
	  private router: Router
	) { }
  
	ngOnInit(): void {
	  this.reqactive = 'is-active';
	}
	logout() {
		debugger
		localStorage.clear();
		this.router.navigate(['login'])
		// UserService.logout();
		// $state.go('login');
	}
	openDashboard() {
	  this.dashactive = 'is-active';
	  this.reqactive = 'false';
	}
	openRequest() {
	  debugger
	  this.reqactive = 'is-active';
	  this.dashactive = 'false';
	  this.tryFlag = true;
	  this.router.navigate(['tabsearch']);
	}

}
