// Entrada
  // prof, utilizei replace para o usuário conseguir aplicar valores com ","
let valorDoProduto = parseFloat(
  prompt("Digite o valor do produto").replace(",", ".")
);
let dinheiroQueRecebi = parseFloat(
  prompt("Digite a quantidade recebida").replace(",", ".")
);

// Desenvolvimento
  // usei ".toFixed(2)" para exibir apenas 2 casas decimais
let trocoA = (dinheiroQueRecebi - valorDoProduto).toFixed(2);

  // arredondamento em casa decimal
let trocoB = Math.ceil(trocoA * 10) / 10;
let trocoC = Math.floor(trocoA * 10) / 10;

// Saída
console.log("A: " + trocoA);
console.log("B: " + trocoB);
console.log("C: " + trocoC);
