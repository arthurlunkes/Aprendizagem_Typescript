let variavel;

// Variavel do tipo Number
variavel = 1;
console.log(variavel, typeof variavel);

// Variavel do tipo Number
variavel = 1.1;
console.log(variavel, typeof variavel);

//  Variavel do tipo String
variavel = 'Arthur';
console.log(variavel, typeof variavel);

// Variavel do tipo Boolean
variavel = true;
console.log(variavel, typeof variavel);

// Variavel do tipo Array
variavel = [1, 2, 3, 'Arthur', true, 4, 5, false];
console.log(variavel, typeof variavel);

// Variavel do tipo Array genérico
let arrGeneric: Array<string> = ['Arroz', 'Feijão', 'Couve', 'Bisteca de Porco'];
console.log(arrGeneric, typeof arrGeneric);

// Variavel do tipo tupla
let tuple: [string, number, string, number];
tuple = ['hello', 1, 'world', 2];
console.log(tuple[0]);
console.log(tuple[1]);

// Variavel do tipo enum
enum Color {Red, Green, Blue, Yellow};
console.log(Color);

// Variavel do tipo Any
let qualquer: any;
qualquer = 'String';
qualquer = 4;
qualquer = true;

// Function que não recebe nenhum retorno
function print(msg: string ): void {
    console.log(`Função sem retorno: ${msg}`);
  }
  
print('Escreve algo na tela');