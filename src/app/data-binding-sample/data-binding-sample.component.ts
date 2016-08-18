/**
This sample will show examples of:
  * one way databinding from the view to the component
    - syntax: (cause)="effect"
  * one way databinding from the component to the view
    - syntax: [effect]="cause"
  * two way databinding
    - [(ngModel)]="property"
*/

import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-data-binding-sample',
  templateUrl: 'data-binding-sample.component.html',
  styleUrls: ['data-binding-sample.component.css']
})
export class DataBindingSampleComponent implements OnInit {

  public contact = {
    firstname: "First",
    middlename: "Middle",
    lastname: "Last"
  };

  public showDetail = false;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit: Data Binding Sample Component");
  }

  toggleEdit() {
    this.showDetail === true ? this.showDetail = false : this.showDetail = true;
  }

}
