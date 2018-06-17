import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import   {FormsModule} from '@angular/forms';

import { RegistroBackUpsComponent } from './Registro-BackUps/Registro-BackUps.component';
import { RegistroMedidasComponent } from './registro-medidas/registro-medidas.component';
import { ConsumosDelMesComponent } from './consumos-del-mes/consumos-del-mes.component';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';


@NgModule({
  declarations: [
    AppComponent
,
    RegistroBackUpsComponent,
    RegistroMedidasComponent,
    ConsumosDelMesComponent,
    RegistroContratoComponent

],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
