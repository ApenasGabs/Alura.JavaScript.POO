export class Cliente {
    nome;
    private _cpf: number;

    get cpf(): number {
        return this._cpf
    }

    constructor(nome: string, cpf: number) {
        this.nome = nome;
        this._cpf = cpf
    }
}