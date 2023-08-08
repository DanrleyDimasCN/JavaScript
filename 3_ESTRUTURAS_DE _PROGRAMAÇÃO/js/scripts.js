// Variáveis

let nome = "Danrley Dimas";

console.log(nome);

nome = "Danrley";

console.log(nome);

const idade = 26

console.log(idade);

// const idade = 27;   // Erro de sintaxe, const não pode ser alterada

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variáveis

// let 2teste = "inválido" // metódo de criação de variável inválido
// let @teste = "inválido" // metódo de criação de variável inválido


let a = 10, b = 20, c = 30;

console.log(a, b, c);


const nomecompleto = "Danrley Dimas"

const nomeCompleto = "Matheus Battisti"

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";  // simbolo _(anderlaine) aceito na criação de variáveis

let $teste = "ok"; // simbolo $(Sifrão) aceito na criação de variáveis

console.log(_teste, $teste);

// 3 - prompt

// const age = prompt("Digite a sua idade:")

// console.log(`Você tem ${age} anos.`);

// 4 - alert

// alert("Testando");

const z = 10

// alert(`O número é ${z}`)

// 5 - Math.x

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

console.log(Math.sign(10));

// 6 - console

console.log("teste!");

console.error("Erro!");

console.warn("aviso!");

// 7 - if

const m = 10;

if (m > 5) {

    console.log("M é maior que 5!");
}

const user = "João"

if (user === "João") {
    console.log(`${user}, seja bem vindo!`);
}

if (user === "Maria") {
    console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8 - else

const loggedIn = false

if (loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}


const q = 10
const w = 25

if(q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - else if

if(1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Danrley"
const userAge = 26

if(userName === "João") {
    console.log("Bem vindo João!");
} else if (userName === "Danrley" && userAge === 26) {
console.log(`Olá ${userName}, você tem ${userAge} anos!`);
} else {
    console.log("Nenhuma condição aceita!");
}

// 10 - while

let p = 0

while(p < 5) {
   console.log(`Repetindo ${p}`);
   p = p + 1 
}

// 11 - do while

let o = 10

do {
    console.log(`Valor de o: ${o}`);
     o--
} while (o >= 1)

// 12 - for

for(let t = 0; t < 10; t++) {
    console.log(`Repetindo algo...`);
}

let r = 10

for(r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo ${r}`);
}

// 13 - identação

for(let u = 0; u < 10; u++) {
   if(u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
   }  else {
    if(u / 2 === 0) {
        console.log("deu 0");
    }
  }
}

// 14 - break

for(let g = 20; g > 10; g--) {
    console.log(` O valor de g E: ${g}`);

    if(g === 15) {
       console.log("O g é 12!");
       break;
    }
}

// 15 - continue

for(let s = 1; s < 10; s = s + 1) {
    // Operador de resto = %
    if(s % 2 === 0) {
        console.log("Número par!");
        continue
    }
    console.log(s);
}

// 16 - switch

const job = "asd";

switch(job) {
    case "Programador":
     console.log("Você é um Programador!");
     break
    case "Advogado":
     console.log("Você é um Advogado!");
     break
    case "Engenheiro":
     console.log("Você é um Engenheiro!");
     break
    default:
        console.log("Profissão não encontrada!");
}

// switch criado da maneira "errada"

const l = 100;

switch (l) {
    case 200:
        console.log("L é 200!");
    case 100:
        console.log("L é 100!");    
    case 300:
        console.log("L é 300!");
    default:
        console.log("L não foi encontrado");
}