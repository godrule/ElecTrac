import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-contrato',
  templateUrl: './registro-contrato.component.html',
  styleUrls: ['./registro-contrato.component.css']
})
export class RegistroContratoComponent implements OnInit {

  contratos= [];
  
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

    var contrato={ Contrato: Registro.value.noContrato, Descripcion: Registro.value.descripcion};

    this.contratos.push(contrato);

    localStorage.setItem("Contratos",JSON.stringify(this.contratos));

    Registro.reset();
   
  }

}
