import { Component } from '@angular/core';
import { DataBindingSampleComponent  } from "./data-binding-sample/data-binding-sample.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { TopNavComponent } from "./top-nav/top-nav.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TopNavComponent, DataBindingSampleComponent, AccordionComponent ]
})
export class AppComponent {
  title = 'Hello World! This is the main app component';
}
