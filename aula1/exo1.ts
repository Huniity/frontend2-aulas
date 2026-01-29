// 
// Criar uma interface Carro com marca, modelo e um ano opcional. 
// Criar um objeto usando essa interface.
//


interface Carro {
    marca: string;
    modelo: string;
    ano?: number;
}

const myCar: Carro = {
    marca: "Volvo",
    modelo: "V40 T3",
    ano: 2016
}


//
// Criar um type chamado MetodoPagamento que pode ser cartão, mbway
// ou paypal.
//


type MetodoPagamento = "cartão" | "mbway" | "paypal"


//
// Criar uma interface Pagamento com: valor: number, metodo:
// MetodoPagamento e detalhes:string
//

interface Pagamento {
    valor: number;
    metodo: MetodoPagamento;
    detalhes: string;
}


//
// Criar uma função
// processarPagamento(pagamento:Pagamento):string
//

const meuPagamento: Pagamento = {
    valor: 50,
    metodo: "mbway",
    detalhes: "pagamento urgente"
}

function processarPagamento(pagamento: Pagamento):string {
    return pagamento.valor + " " + pagamento.metodo + " ( " + pagamento.detalhes + " )"
}
const pagamentoInfo: string = processarPagamento(meuPagamento)
