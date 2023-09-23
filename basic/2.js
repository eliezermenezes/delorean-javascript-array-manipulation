// 8 minutos

// Filter:
// Forneça um array de palavras e peça aos membros do time para filtrar e criar um
// novo array contendo apenas palavras com mais de 5 letras.

const words = ["apple", "banana", "grape", "orange", "kiwi"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

// Esperado:
// ["banana", "orange"]
