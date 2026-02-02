//
// Criar um type Player que tenha os atributos name, age e game.
// Criar 4 diferentes tipos de inicializações e um objecto jogador do tipo Player:
// Com Partial<T>;
// Com Readonly<T>;
// Com Pick<T, K>;
// Com Omit<T, K>;
//


type Player = {
    name: string;
    age: number;
    game: string;
}

const jogador: Player ={
    name: "Adrien",
    age: 32,
    game: "CS2"
}

const playerPartial: Partial<Player> = {name: "New Player"};
const playerReadOnly: Readonly<Player> = {name: "New Player", age: 25, game: "Valorant"};
const playerPick: Pick<Player, "name" | "game"> = {name: "New Player", game: "LoL"}; 
const playerOmit: Omit<Player, "age"> = {name: "New Player", game: "WoW"};



//
// Criar uma classe Veiculo com propriedades marca, modelo e ano. Criar uma classe
// Carro que herda de Veículo e adiciona a propriedade portas.
// Criar um método description() dentro da classe Veículo que retorne uma string com
// todas as propriedades do veículo. Depois, criar dentro da classe Carro um método
// description() que retorne uma string com a string da classe Veiculo e adicionado “com
// x portas.”;
// Inicializar o objeto do carro e fazer console.log do método description() do mesmo.
//


class Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    description(): string {
        return `Veículo: ${this.marca} ${this.modelo} de ${this.ano}`;
    }
}

class Carro2 extends Veiculo {
    portas: number;

    constructor(marca: string, modelo: string, ano: number, portas: number) {
        super(marca, modelo, ano);
        this.portas = portas;
    }
    description(): string {
        return `${super.description()} com ${this.portas} portas.`;
    }
}

const MyCar = new Carro2("Volvo", "V40 T3", 2016, 5)
console.log(MyCar.description())



//
// Criar uma classe ListHandler com T genérico que permita adicionar e remover
// elementos de um array. A classe deve conter o método add(), remove(), e getAll().
// Inicializar o ListHandler e utilizar todos os métodos, e no final fazer console.log do
// getAll().
//


class ListHandler<T> {
    items: T[] = [];

    getAll(): T[] {
        console.log(this.items);
        return this.items;
    }
    add(item: T): T[] {
        this.items.push(item);
        return this.getAll();
    }
    remove(item: T): T[] {
        this.items = this.items.filter(i => i !== item);
        return this.getAll();
    }
    // OU (correção J. Brito)
    /*remove(item: T){
        const index = this.items.indexOf(item);
        if(index !== -1){
            this.items.splice(index, 1);
        }
        return this.getAll();
    } */
}


const listHandler = new ListHandler<number>();
listHandler.getAll()
listHandler.add(1)
listHandler.add(2)
listHandler.add(3)
listHandler.remove(2)
