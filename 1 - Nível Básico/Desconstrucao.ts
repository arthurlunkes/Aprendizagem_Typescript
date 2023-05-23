// Desconstrução de um array
let entrada = [1, 2];
let [primeiro, segundo] = entrada;
//or
primeiro = entrada[0];
segundo = entrada[1];

console.log(primeiro);
console.log(segundo);

// Descontrução de uma tupla
let tupla: [number, string, boolean] = [3, 'Arthur', true];
let [y, x, z] = tupla;

console.log(y);
console.log(x);
console.log(z);

// Descontrução de um Objeto
let pessoa = {
    nome: 'Arthur',
    peso: 65.0,
    sexo: 'Masculino',
};
let { nome, peso, sexo} = pessoa;

console.log(nome);
console.log(peso);
console.log(sexo);