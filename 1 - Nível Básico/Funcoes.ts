// Função simples com retorno
function soma(num1: number, num2: number): number {
    return num1 + num2
};

console.log(soma(1,2));

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


// Função arrow functions
const saudacao3 = (nome: string): string => {
    return `Olá, ${nome}`;
};

console.log(saudacao3('Arthur'));