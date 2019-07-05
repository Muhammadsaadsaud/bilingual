import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TranslateService {

    private messageSource = new BehaviorSubject<string>('en');
    currentMessage = this.messageSource.asObservable();

    changeMessage(message : string){
      this.messageSource.next(message);

    }

     local: string = 'en';

     _french() {
      //console.log(this._getLang());
      return this.local= 'fr';
    }
    _english() {
      //console.log(this._getLang());
      return this.local= 'en';
      
    }



  _getLang(){
    console.log('hello from getLang()');
    return this.local;
   

  
  }

  
    
}
