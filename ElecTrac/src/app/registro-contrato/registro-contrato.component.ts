import { Component, OnInit } from '@angular/core';
import { Contrato } from "../shared/BLL/Contrato";

@Component({
  selector: 'app-registro-contrato',
  templateUrl: './registro-contrato.component.html',
  styleUrls: ['./registro-contrato.component.css']
})
export class RegistroContratoComponent implements OnInit {

  contrato: Contrato;
 
  constructor() { }

  ngOnInit() {
    this.contrato=new Contrato("","");
  }

  Guardar(noContrato,descripcion)
  {
    this.contrato.descripcion=descripcion;
    this.contrato.noContratto=noContrato;
  }

}
