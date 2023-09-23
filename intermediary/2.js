// 10 minutos

// Reduce para Agrupamento:
// Dado um array de objetos representando transações com valores e categorias,
// instrua os membros do time a usar reduce para calcular o total de cada categoria.

const transactions = [
  { category: "Groceries", amount: 50 },
  { category: "Entertainment", amount: 30 },
  { category: "Groceries", amount: 20 },
  { category: "Utilities", amount: 100 },
];

const categoryTotal = transactions.reduce((acc, transaction) => {
  if (!acc[transaction.category]) {
    acc[transaction.category] = 0;
  }
  acc[transaction.category] += transaction.amount;
  return acc;
}, {});

console.log(categoryTotal);

// Resultado:
// {
//     Groceries: 70,
//     Entertainment: 30,
//     Utilities: 100
// }
