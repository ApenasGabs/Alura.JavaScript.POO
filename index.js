import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
const cliente1 = new Cliente("Sophia", 11122233309);
const contaSophia = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Gabs", 99922200034);
const contaGabs = new ContaCorrente(cliente2, 1202);

contaGabs.depositar(299);
contaGabs.transferir(122, contaSophia);

console.log(contaGabs, contaSophia);
console.log(ContaCorrente.numeroDeContas);