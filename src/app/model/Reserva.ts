export class Reserva {
    constructor(
        public id: number,
        public nombreEspacio: string,
        public fecha: string,
        public estado: boolean,
        public valor: number
       
    ) { }
}
