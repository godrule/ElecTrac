import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroContratoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
