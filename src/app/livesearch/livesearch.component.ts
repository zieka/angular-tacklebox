import { Component, OnInit } from '@angular/core';
import { CustomfilterPipe } from '../customfilter.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-livesearch',
  templateUrl: 'livesearch.component.html',
  styleUrls: ['livesearch.component.css'],
  pipes: [CustomfilterPipe]
})
export class LiveSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  movies = [
    {
      "title": "Star Wars",
      "director": "George Lucas"
    },
    {
      "title": "Good Will Hunting",
      "director": "Gus Van Sant"
    },
    {
      "title": "Jurassic Park",
      "director": "Steven Spielberg"
    },
    {
      "title": "Lord of the Rings",
      "director": " Peter Jackson"
    },
    {
      "title": "Inception",
      "director": "Christopher Nolan"
    }
  ];


}
