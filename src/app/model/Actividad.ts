export class Evento {
    constructor(
        public id: number,
        public nombre: string,
        public ubicacion: string,
        public capacidad: number,
        public horario: string,
        public descripcion: string
       
    ) { }
}
