import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
const clienteSophia = new Cliente();
clienteSophia.nome = "Sophia";
clienteSophia.cpf = 11122233309;

const contaSophia = new ContaCorrente();
contaSophia._saldo = 0;
contaSophia.agencia = 1001;