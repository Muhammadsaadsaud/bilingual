import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateService} from './translate.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [ TranslateService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


