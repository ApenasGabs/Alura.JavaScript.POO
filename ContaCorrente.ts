import { Cliente } from "./Cliente";
export class ContaCorrente {
  static numeroDeContas = 0
  private _agencia;
  private _cliente;
  private _saldo = 0;

  get agencia() {
    return this._agencia;
  }
  get cliente() {
    return this._cliente;
  }
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  get saldo() {
    return this._saldo;
  }
  constructor(cliente: object, agencia: number) {
    ContaCorrente.numeroDeContas += 1;
    this._agencia = agencia;
    this._cliente = cliente;
  }
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}