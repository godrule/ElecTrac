import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroBackUpsComponent } from './Registro-BackUps/Registro-BackUps.component';
import { RegistroMedidasComponent } from './registro-medidas/registro-medidas.component';
import { VisualizarContratoComponent } from './visualizar-contrato/visualizar-contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroBackUpsComponent,
    RegistroMedidasComponent,
    VisualizarContratoComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
