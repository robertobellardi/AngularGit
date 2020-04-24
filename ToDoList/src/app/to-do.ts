export class ToDo {
    id: number;
    cosadafare: string;
    priorita: number;
    completata: boolean;

    constructor(id: number, cosadafare: string, priorita: number, completata: boolean) {
        this.id = id;
        this.cosadafare = cosadafare;
        this.priorita = priorita;
        this.completata = completata;
    }
}
