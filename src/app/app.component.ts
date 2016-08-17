import { Component } from '@angular/core';
import { TopNavComponent } from "./top-nav/top-nav.component";
import { DataBindingSampleComponent  } from "./data-binding-sample/data-binding-sample.component";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TopNavComponent, DataBindingSampleComponent ]
})
export class AppComponent {
  title = 'app works!';
}
