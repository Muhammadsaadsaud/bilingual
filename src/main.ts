import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, Injectable, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { TranslateService } from './app/translate.service'


var injector = ReflectiveInjector.resolveAndCreate([TranslateService]);
var translateService = injector.get(TranslateService);
console.log(translateService.local);
var local = translateService.currentMessage.subscribe(message => this.message = message);
console.log(local);

  

export class main{
  message : string;
  constructor (private trans : TranslateService){}
  ngOnInit(){
   
    this.trans.currentMessage.subscribe(message => this.message = message);
  }
}

if (environment.production) {
  enableProdMode();
}




// use the require method provided by webpack
declare const require;
//let locale = 'fr';
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./locale/messages.`+translateService.local+`.xlf`);
 
platformBrowserDynamic().bootstrapModule(AppModule, {
providers: [
{provide: TRANSLATIONS, useValue: translations},
{provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
]
});













