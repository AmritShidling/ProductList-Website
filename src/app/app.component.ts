import { Component } from "@angular/core";

@Component({
  selector : 'pm-root',
  template : `
    <div> <h1> {{projectTitle}} </h1>
    <div> <pm-product></pm-product> </div>
    </div>
  `
})
export class AppComponent{
  projectTitle : String = 'The ACME';
}