import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-globalheader',
  templateUrl: './globalheader.component.html',
  styleUrls: ['./globalheader.component.scss']
})
export class GlobalheaderComponent implements OnInit {
  dashactive:any;
  reqactive:any;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.reqactive='active';
  }
  logout(){
    this.router.navigate(['user/login'])
  }
  openDashboard(){
    this.dashactive = 'active';
    this.reqactive='false';
  }
  openRequest(){
    debugger
    // this.reqactive='active';
    // this.dashactive = 'false';
  }

}
