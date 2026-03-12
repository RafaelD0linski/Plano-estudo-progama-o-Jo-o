// Desafio 01 - Maior número de um array
// Rode: node exemplo.js

let numeros = [10, 5, 8, 20]
let maior = numeros[0]

for (let numero of numeros) {
  if (numero > maior) {
    maior = numero
  }
}

console.log("Maior:", maior)
