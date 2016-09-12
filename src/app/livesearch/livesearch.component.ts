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
    {"title": "Star Wars", "genre": "", "director": "", "rating": ""},
    {"title": "Good Will Hunting", "genre": "", "director": "", "rating": ""},
    {"title": "Jurassic Park", "genre": "", "director": "", "rating": ""},
    {"title": "Lord of the Rings", "genre": "", "director": "", "rating": ""},
    {"title": "Inception", "genre": "", "director": "", "rating": ""}
  ];


}
