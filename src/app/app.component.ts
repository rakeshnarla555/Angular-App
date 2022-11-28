import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  displayVal=''
  count=0;
  getValue(val:string){
   this.displayVal=val;
  }
  counter(type:string){
   type==='minus'?this.count--:this.count++;
  }
}
