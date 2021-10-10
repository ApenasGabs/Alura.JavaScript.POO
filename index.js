import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const contaSophia = new ContaCorrente();
contaSophia._saldo = 22;
contaSophia.agencia = 1001;
contaSophia.cliente = new Cliente();
contaSophia.cliente.nome = "Sophia";
contaSophia.cliente.cpf = 11122233309;
// console.log(contaSophia);

const contaGabs = new ContaCorrente();
contaGabs._saldo = 222;
contaGabs.agencia = 1022;
contaGabs.cliente = new Cliente();
contaGabs.cliente.nome = "Gabs";
contaGabs.cliente.cpf = 99922200034;

console.log(contaGabs, contaSophia);