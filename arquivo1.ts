console.clear();
const teclado = require('prompt-sync')();

let ola: string = teclado(`digite uma congratulação: `);
let nome: string = teclado(`digite seu nome: `) ;
let passatempo: string =teclado(`digite um passatempo `);
let diaaniversario: number =teclado(`digite o dia do aniversario `);
let mesaniversario: string =teclado(`digite o mes do aniversario `);
let anoaniversario: number = teclado(`digite o ano do aniversario `);

console.clear();
console.log(`${ola}`);
console.log(`meu nome é ${nome}, nascido no dia ${diaaniversario},`);
console.log(`no mês ${mesaniversario} no ano de ${anoaniversario},`);
console.log(`meu atual passatempo é ${passatempo}`); 




