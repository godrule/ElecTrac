import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroBackUpsComponent } from './Registro-BackUps/Registro-BackUps.component';
import { RegistroMedidasComponent } from './registro-medidas/registro-medidas.component';
import { ConsumosDelMesComponent } from './consumos-del-mes/consumos-del-mes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroBackUpsComponent,
    RegistroMedidasComponent,
    ConsumosDelMesComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
