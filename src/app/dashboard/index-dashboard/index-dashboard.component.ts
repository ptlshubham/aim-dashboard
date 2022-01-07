import { Component, OnInit } from '@angular/core';
import {FormControl  } from '@angular/forms';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index-dashboard.component.html',
  styleUrls: ['./index-dashboard.component.scss']
})
export class IndexDashboardComponent implements OnInit {
	state = new FormControl();
	states: any = [];
	toppings = new FormControl();

	toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  

	constructor(
		private dashboardservice:DashboardService
	) {
		
	}
  
	ngOnInit(): void {
		this.getStates();
		// this.dashboardservice.getOverdueRequests().subscribe((data:any)=>{
			
		// })
	}
	getStates() {
		this.dashboardservice.getUSState().subscribe(data => {
		  this.states = data;
		  debugger
		});
	  }
	login() { }
	reset() {
  
	}

}
