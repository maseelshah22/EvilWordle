// sources
/* 
https://stackoverflow.com/questions/4064444/returning-json-from-a-php-script
https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/
https://www.w3schools.com/php/func_array_rand.asp
https://stackoverflow.com/questions/8719276/cross-origin-request-headerscors-with-php-headers
https://www.php.net/manual/en/context.ssl.php
https://angular.io/guide/class-binding
https://medium.com/ramsatt/map-set-in-typescript-angular-643e506e6c3c

URL: https://cs4640.cs.virginia.edu/dda5us/hw8/browser
*/

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsGameComponent } from './words-game/words-game.component';

@NgModule({
  declarations: [
    AppComponent,
    WordsGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
