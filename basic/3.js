// 8 minutos

// Reduce:
// Dado um array de números, instrua os membros do time a usar reduce para
// calcular a soma total dos números.

const numbers = [10, 20, 30, 40, 50];
const total = numbers.reduce((acc, current) => acc + current, 0);
console.log(total);

// Esperado:
// 150
