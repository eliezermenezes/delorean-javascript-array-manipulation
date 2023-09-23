// 10 minutos

// Transformação Complexa com Map:
//
// Dado um array de objetos representando dados de alunos com notas em várias disciplinas,
// instrua os membros do time a usar map para calcular a média das notas de cada aluno.

const studentData = [
  { name: "Alice", grades: [85, 92, 78] },
  { name: "Bob", grades: [74, 84, 94] },
  { name: "Charlie", grades: [90, 87, 84] },
];

const studentAverages = studentData.map((student) => ({
  name: student.name,
  average: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length,
}));

console.log(studentAverages);

// Resultado:
// [
//     { name: 'Alice', average: 85 },
//     { name: 'Bob', average: 84 },
//     { name: 'Charlie', average: 87 },
// ]