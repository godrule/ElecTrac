import { Component, OnInit } from '@angular/core';
import { Contrato } from "../shared/BLL/Contrato";
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-registro-contrato',
  templateUrl: './registro-contrato.component.html',
  styleUrls: ['./registro-contrato.component.css']
})
export class RegistroContratoComponent implements OnInit {

  contratos= [];
  informacion=[];
  titulo = 'Registro de Contratos';

  constructor() { }

  ngOnInit() {
    this.cargarContratos();
  }

  cargarContratos()
  {
    if(localStorage.getItem("Contratos")){
      this.contratos = JSON.parse(localStorage.getItem("Contratos"));
    }
  }

  Guardar(Registro)
  {

    var contrato={ Contrato: Registro.value.noContrato, Info: Registro.value.descripcion};

    this.contratos.push(contrato);

    localStorage.setItem("Contratos",JSON.stringify(this.contratos));
    Registro.reset();
   
  }

}
