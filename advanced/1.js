// 10 minutos

// Map, Filter e Reduce Combinados:
//
// Forneça um array de objetos representando pedidos de clientes com itens e quantidades.
// Instrua os membros do time a usar map, filter e reduce para calcular o total gasto em uma determinada categoria de itens.

const orders = [
  {
    category: "Eletrodomésticos",
    items: [
      { name: "Geladeira", price: 1000 },
      { name: "Liquidificador", price: 200 },
    ],
  },
  {
    category: "Mobília",
    items: [
      { name: "Cama", price: 2500 },
      { name: "Sofá", price: 800 },
    ],
  },
];

const desiredCategory = "Eletrodomésticos";
const totalSpent = orders
  .filter((order) => order.category === desiredCategory)
  .map((order) => order.items.reduce((acc, item) => acc + item.price, 0))
  .reduce((acc, amount) => acc + amount, 0);
// .pop()

console.log(totalSpent);

// Esperado:
// 1200
