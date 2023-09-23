// 10 minutos

// Map e Filter Combinados:
// Forneça um array de objetos representando produtos, incluindo nome e preço.
// Peça aos membros do time para criar um novo array com os nomes dos produtos que custam mais de R$ 500.

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 150 },
  { name: "Monitor", price: 250 },
];

const expensiveProducts = products
  .filter((product) => product.price > 500)
  .map((product) => product.name);

console.log(expensiveProducts);

// Esperado:
// ["Laptop", "Phone"]
