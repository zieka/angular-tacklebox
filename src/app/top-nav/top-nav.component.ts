import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	   console.log("hello world! from top-nav");
  }

}
