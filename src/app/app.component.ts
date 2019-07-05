import { Component } from '@angular/core';
import { TranslateService } from './translate.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor (private trans : TranslateService){}
  message:string;

  ngOnInit(){
    this.trans.currentMessage.subscribe(message => this.message = message);
  }

  newMessage(){
    this.trans.changeMessage('Hello i am changing');
  }
 
  minutes = 0;
  gender = 'female';
  
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  heroes: string[] = ['Magneta', 'Celeritas', 'Dynama'];
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }
  
  french() {
    this.trans.changeMessage('fr');
    this.trans._french();
  }
  english() {
    this.trans.changeMessage('en');
    this.trans._english();
  }
  
  
}



