export class Usuario {


    numIdentificacion!: number;
    tipoIdentificacion:string;
    fechaNacimiento:string;
    edad!: number;
    telefono: string;
    correo: string;
    constructor(numIdentificacion:number,tipoIdentificacion:string,fechaNacimiento:string,edad: number,telefono: string, correo: string){

        this.numIdentificacion= numIdentificacion;
        this.tipoIdentificacion= tipoIdentificacion;
        this.fechaNacimiento= fechaNacimiento;
        this.edad= edad;
        this.telefono= telefono;
        this.correo= correo;
    }

}
