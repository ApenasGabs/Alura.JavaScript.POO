class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    saldo;
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}
if (contaSophia.saldo >= valorSacado) {
    contaSophia.saldo -= valorSacado;
}
const clienteSophia = new Cliente();
clienteSophia.nome = "Sophia";
clienteSophia.cpf = 11122233309;

const contaSophia = new ContaCorrente();
contaSophia.saldo = 0;
contaSophia.agencia = 1001;
console.log(contaSophia.saldo);
contaSophia.saldo = 230;

console.log(contaSophia.saldo);