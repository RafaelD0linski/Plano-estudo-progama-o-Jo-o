# Semana 7 — Fixação: Objetos e manipulação de dados

10 exercícios. Rode com `node exercicio-N.js`.

---

## Exercício 1

**Desafio:** Crie um objeto `pessoa` com nome, idade e cidade. Exiba cada propriedade.

<details>
<summary>💡 Solução</summary>

```js
let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" }
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cidade)
```
</details>

---

## Exercício 2

**Desafio:** Crie um objeto `produto` (nome, preco, estoque). Altere o preço e exiba o objeto.

<details>
<summary>💡 Solução</summary>

```js
let produto = { nome: "Notebook", preco: 3500, estoque: 10 }
produto.preco = 3200
console.log(produto)
```
</details>

---

## Exercício 3

**Desafio:** Crie um array de 3 objetos (cada um com nome e nota). Percorra e exiba "Nome: X, Nota: Y".

<details>
<summary>💡 Solução</summary>

```js
let alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 7 }
]
for (let a of alunos) {
  console.log("Nome:", a.nome, "Nota:", a.nota)
}
```
</details>

---

## Exercício 4

**Desafio:** Dado um array de objetos com "valor", some todos os valores e exiba.

<details>
<summary>💡 Solução</summary>

```js
let itens = [{ valor: 10 }, { valor: 20 }, { valor: 30 }]
let total = 0
for (let item of itens) total += item.valor
console.log("Total:", total)
```
</details>

---

## Exercício 5

**Desafio:** Crie uma função que recebe um objeto pessoa e retorna "Nome: X, Idade: Y".

<details>
<summary>💡 Solução</summary>

```js
function mostrarPessoa(p) {
  return "Nome: " + p.nome + ", Idade: " + p.idade
}
let p = { nome: "Carlos", idade: 30 }
console.log(mostrarPessoa(p))
```
</details>

---

## Exercício 6

**Desafio:** Dado um array de pessoas (nome, idade), encontre a pessoa com maior idade e exiba o nome.

<details>
<summary>💡 Solução</summary>

```js
let pessoas = [
  { nome: "A", idade: 20 },
  { nome: "B", idade: 35 },
  { nome: "C", idade: 28 }
]
let maisVelha = pessoas[0]
for (let p of pessoas) {
  if (p.idade > maisVelha.idade) maisVelha = p
}
console.log("Mais velha:", maisVelha.nome)
```
</details>

---

## Exercício 7

**Desafio:** Crie um objeto "conta" com saldo. Crie uma função que adiciona um valor ao saldo e retorna o novo saldo.

<details>
<summary>💡 Solução</summary>

```js
let conta = { saldo: 100 }
function depositar(conta, valor) {
  conta.saldo += valor
  return conta.saldo
}
console.log(depositar(conta, 50))  // 150
```
</details>

---

## Exercício 8

**Desafio:** Dado um array de produtos (nome, preco), exiba o nome do produto mais caro.

<details>
<summary>💡 Solução</summary>

```js
let produtos = [
  { nome: "A", preco: 100 },
  { nome: "B", preco: 250 },
  { nome: "C", preco: 80 }
]
let maisCaro = produtos[0]
for (let p of produtos) {
  if (p.preco > maisCaro.preco) maisCaro = p
}
console.log("Mais caro:", maisCaro.nome)
```
</details>

---

## Exercício 9

**Desafio:** Crie um objeto com uma função dentro que retorna uma mensagem (ex: saudacao() retorna "Olá").

<details>
<summary>💡 Solução</summary>

```js
let usuario = {
  nome: "João",
  saudacao: function() {
    return "Olá, " + this.nome
  }
}
console.log(usuario.saudacao())
```
</details>

---

## Exercício 10

**Desafio:** Dado um array de pessoas (nome, idade), calcule e exiba a média das idades.

<details>
<summary>💡 Solução</summary>

```js
let pessoas = [
  { nome: "A", idade: 20 },
  { nome: "B", idade: 30 },
  { nome: "C", idade: 25 }
]
let soma = 0
for (let p of pessoas) soma += p.idade
let media = soma / pessoas.length
console.log("Média das idades:", media)
```
</details>
