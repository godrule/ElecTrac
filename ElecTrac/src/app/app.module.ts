import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroBackUpsComponent } from './Registro-BackUps/Registro-BackUps.component';
import { RegistroMedidasComponent } from './registro-medidas/registro-medidas.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroBackUpsComponent,
    RegistroMedidasComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
