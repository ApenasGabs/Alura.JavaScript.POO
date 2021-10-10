import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
const clienteSophia = new Cliente("Sophia", 11122233309);
const contaSophia = new ContaCorrente(clienteSophia, 1002);
const clienteGabs = new Cliente("Gabs", 991122331155);
const contaGabs = new ContaCorrente(clienteGabs, 1999);
console.log(contaSophia,contaGabs);