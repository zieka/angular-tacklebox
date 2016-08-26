import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css']
})
export class AccordionComponent implements OnInit {

  accordionPanels = [
    {
      title: "Panel Title",
      description: "This is the description that can be fed directly into the panel contents.",
      list: ["Item 1","Item 2","Item 3", "Item 4"],
      panelid: "ONE"
    },
    {
      title: "Red Team",
      description: "The red team is will help to establish and maintain traditions in efforts to prevent them from being forgotten.",
      list: ["Abraham","Ulysses","Theodore", "Dwight"],
      panelid: "TWO"
    },
    {
      title: "Blue Team",
      description: "The blue team will help to evaluate new advances and methods in efforts to improve the status quo for all.",
      list: ["Franklin","Woodrow","Andrew", "Harry"],
      panelid: "THREE"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
