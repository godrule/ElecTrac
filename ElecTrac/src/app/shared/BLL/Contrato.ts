export class Contrato{
    noContrato: string;
    descripcion:string;

    constructor(
        noContrato: string,
        descripcion:string,
    ){
        this.noContrato=noContrato;
        this.descripcion=descripcion;
    }
}