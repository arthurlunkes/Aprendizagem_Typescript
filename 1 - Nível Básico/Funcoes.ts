// Função simples com retorno
function somar(num1: number, num2: number): number {
    return num1 + num2
};

console.log(somar(1,2));

// Função simples sem retorno
function olaMundo(): void {
    console.log('Hello World!')
};

// Função com parâmetro opcional
function saudacao(nome: string, sobrenome?: string): string {
    if(sobrenome) {
        return `Olá, ${nome} ${sobrenome}`;
    } else {
        return `Olá, ${nome}`;
    }
};

console.log(saudacao('Arthur', 'Lunkes'));
console.log(saudacao('Lucas'));

// Função com parâmetros padrão
function saudacao2(nome: string, sobrenome: string = 'Silva'): string {
    return `Olá, ${nome} ${sobrenome}`;
};

console.log(saudacao2('Arthur'));
console.log(saudacao2('Arthur', 'Lunkes'));

// Função como tipo (ta em branco pq to tentando entender)
type OperacaoMatematica = (a: number, b: number) => number;

function soma(a: number, b: number): number {
  return a + b;
}

function subtracao(a: number, b: number): number {
  return a - b;
}

function calculadora(operacao: OperacaoMatematica, a: number, b: number): number {
  return operacao(a, b);
}

console.log(calculadora(soma, 4, 2));
console.log(calculadora(subtracao, 7, 3));

// Função arrow functions
const saudacao3 = (nome: string): string => {
    return `Olá, ${nome}`;
};

console.log(saudacao3('Arthur'));