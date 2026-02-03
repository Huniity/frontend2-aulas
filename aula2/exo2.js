//
// Criar um type Player que tenha os atributos name, age e game.
// Criar 4 diferentes tipos de inicializações e um objecto jogador do tipo Player:
// Com Partial<T>;
// Com Readonly<T>;
// Com Pick<T, K>;
// Com Omit<T, K>;
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var jogador = {
    name: "Adrien",
    age: 32,
    game: "CS2"
};
var playerPartial = { name: "New Player" };
var playerReadOnly = { name: "New Player", age: 25, game: "Valorant" };
var playerPick = { name: "New Player", game: "LoL" };
var playerOmit = { name: "New Player", game: "WoW" };
//
// Criar uma classe Veiculo com propriedades marca, modelo e ano. Criar uma classe
// Carro que herda de Veículo e adiciona a propriedade portas.
// Criar um método description() dentro da classe Veículo que retorne uma string com
// todas as propriedades do veículo. Depois, criar dentro da classe Carro um método
// description() que retorne uma string com a string da classe Veiculo e adicionado “com
// x portas.”;
// Inicializar o objeto do carro e fazer console.log do método description() do mesmo.
//
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.description = function () {
        return "Ve\u00EDculo: ".concat(this.marca, " ").concat(this.modelo, " de ").concat(this.ano);
    };
    return Veiculo;
}());
var Carro2 = /** @class */ (function (_super) {
    __extends(Carro2, _super);
    function Carro2(marca, modelo, ano, portas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.portas = portas;
        return _this;
    }
    Carro2.prototype.description = function () {
        return "".concat(_super.prototype.description.call(this), " com ").concat(this.portas, " portas.");
    };
    return Carro2;
}(Veiculo));
var MyCar = new Carro2("Volvo", "V40 T3", 2016, 5);
console.log(MyCar.description());
//
// Criar uma classe ListHandler com T genérico que permita adicionar e remover
// elementos de um array. A classe deve conter o método add(), remove(), e getAll().
// Inicializar o ListHandler e utilizar todos os métodos, e no final fazer console.log do
// getAll().
//
var ListHandler = /** @class */ (function () {
    function ListHandler() {
        this.items = [];
        // OU (correção J. Brito)
        /*remove(item: T){
            const index = this.items.indexOf(item);
            if(index !== -1){
                this.items.splice(index, 1);
            }
            return this.getAll();
        } */
    }
    ListHandler.prototype.getAll = function () {
        console.log(this.items);
        return this.items;
    };
    ListHandler.prototype.add = function (item) {
        this.items.push(item);
        return this.getAll();
    };
    ListHandler.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
        return this.getAll();
    };
    return ListHandler;
}());
var listHandler = new ListHandler();
listHandler.getAll();
listHandler.add(1);
listHandler.add(2);
listHandler.add(3);
listHandler.remove(2);
