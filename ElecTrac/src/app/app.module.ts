import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroBackUpsComponent } from './Registro-BackUps/Registro-BackUps.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroBackUpsComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
