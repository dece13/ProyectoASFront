export class Usuario{

    constructor(
        public id:number,
        public nombre:string,
        public identificacion:string,
        public telefono:string,
        public correo:string,
        public password:string,
        public afiliacion:boolean,
        public fechaNacimiento:Date,
        public direccion:string,
        public tipoCuenta:number,
        
            
    ){}
}