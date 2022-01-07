import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-tab-search',
  templateUrl: './tab-search.component.html',
  styleUrls: ['./tab-search.component.scss']
})
export class TabSearchComponent implements OnInit {
  activetabbasic:any='tab-selected';
  activetabadvance:any=''

  constructor() { }

  ngOnInit(): void {
  }
  basicSearch(){
    this.activetabadvance='';
    this.activetabbasic='tab-selected';
    debugger
  }
  advanceSearch(){
    this.activetabadvance='tab-selected';
    this.activetabbasic='';
  }

}
