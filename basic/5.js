// 8 minutos

// Shift e Unshift:
// Crie um programa que simule uma fila (queue) de pessoas.
// Use o método unshift para adicionar pessoas à fila e o método shift para retirar pessoas da fila.

const queue = ["Person 1", "Person 2", "Person 3"];
queue.push("Person 1");
queue.push("Person 2");
queue.push("Person 3");

queue.shift();
console.log(queue);

// Esperado:
// ["Person 2", "Person 3"]
