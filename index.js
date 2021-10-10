import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente01 = new Cliente();
cliente01.nome = "Sophia";
cliente01.cpf = 11122233309;

const cliente02 = new Cliente();
cliente01.nome = "Gabs";
cliente01.cpf = 99922200034;

const contaSophia = new ContaCorrente();
contaSophia.saldo = 22;
contaSophia.agencia = 1001;
contaSophia.cliente = cliente01;
console.log(contaSophia);

const contaGabs = new ContaCorrente();
contaGabs.saldo = 222;
contaGabs.agencia = 1022;
contaGabs.cliente = cliente02;
contaGabs.transferir(20, contaSophia);
console.log(contaGabs, contaSophia);