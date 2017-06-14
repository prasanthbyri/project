import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ChildcomponentComponent} from './childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name= "byri";
  age= 24;
  Email= "byri@gmail.com";
}
