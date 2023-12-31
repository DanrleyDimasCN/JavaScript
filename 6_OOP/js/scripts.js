// 1 - métodos

const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au! Au!");
    }
}

console.log(animal.nome);

animal.latir();

// 2 - aprofundadndo em métodos

const pessoa = {
    nome: "Danrley",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    }
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Dimas")

console.log(pessoa.getNome());

// 3 - prototype

const text = "asd"

console.log(Object.getPrototypeOf(text));

const bool = true

console.log(Object.getPrototypeOf(bool));

const arr = []

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototype

const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject)

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes básicas

const cachorro = {
    raca: null,
    patas: 4
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - Função como classe - função construtora

function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira-Lata")

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funções como classe

function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky);

// 8 - métodos na função construtora

Cachorro.prototype.uivar = () => {
    console.log("Auuuuu!");
}

console.log(Cachorro.prototype);

husky.uivar()

// 9 - classes ES6

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "Labrador")

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

  descrever() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }  
}

const scania = new Caminhao(6, "vermelha")

console.log(scania);

scania.descrever()

Caminhao.motor = 4; // Não consegue adicionar a propriedade

const c2 = new Caminhao(4, "Preta");

console.log(c2);

console.log(c2.motor); // undefined

c2.descrever()

Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

// 11 - override

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const danrley = new Humano("Danrley", 26);

console.log(danrley);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(danrley.idade);

console.log(Humano.prototype.idade);

// 12 - Symbols em classes

class Aviao {
     constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas
     }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]); 

console.log(boeing[pilotos]); 

// 13 - Getters e Setters

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}.`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programaçao, javaScript, js"

console.log(myPost);

// 14 - Herança

class Mamifero {
    constructor(patas, nome) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super (patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - instanceof

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Cachorro);

let undefined = 1;

console.log(undefined);