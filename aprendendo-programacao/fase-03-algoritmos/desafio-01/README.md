# Desafio 01 — Maior número de um array

Dado um array de números, encontre e exiba o **maior** valor.

## Exemplo de solução

```js
let numeros = [10, 5, 8, 20]
let maior = numeros[0]

for (let numero of numeros) {
  if (numero > maior) {
    maior = numero
  }
}

console.log(maior)  // 20
```

Crie seu arquivo `solucao.js` e rode: `node solucao.js`
