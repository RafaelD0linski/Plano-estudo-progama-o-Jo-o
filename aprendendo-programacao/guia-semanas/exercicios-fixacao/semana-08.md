# Semana 8 — Fixação: Algoritmos (misturando tudo)

10 exercícios. Rode com `node exercicio-N.js`.

---

## Exercício 1

**Desafio:** Dado um array de números, exiba o maior e o menor.

<details>
<summary>💡 Solução</summary>

```js
let arr = [5, 12, 3, 8, 20, 1]
let maior = arr[0], menor = arr[0]
for (let n of arr) {
  if (n > maior) maior = n
  if (n < menor) menor = n
}
console.log("Maior:", maior, "Menor:", menor)
```
</details>

---

## Exercício 2

**Desafio:** Dado um array de notas, calcule a média e exiba "Aprovado" (>= 7) ou "Reprovado".

<details>
<summary>💡 Solução</summary>

```js
let notas = [8, 7, 6, 9]
let soma = 0
for (let n of notas) soma += n
let media = soma / notas.length
console.log(media >= 7 ? "Aprovado" : "Reprovado")
```
</details>

---

## Exercício 3

**Desafio:** Simule um saque: se saldo >= valor, subtraia e exiba novo saldo; senão exiba "Saldo insuficiente".

<details>
<summary>💡 Solução</summary>

```js
let saldo = 100
let valorSaque = 60
if (saldo >= valorSaque) {
  saldo -= valorSaque
  console.log("Novo saldo:", saldo)
} else {
  console.log("Saldo insuficiente")
}
```
</details>

---

## Exercício 4

**Desafio:** Conte quantos números pares existem no array [1, 2, 3, 4, 5, 6, 7, 8].

<details>
<summary>💡 Solução</summary>

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let count = 0
for (let n of arr) {
  if (n % 2 === 0) count++
}
console.log("Pares:", count)
```
</details>

---

## Exercício 5

**Desafio:** Dado um array de nomes, exiba "Encontrado" se existir "Maria", senão "Não encontrado".

<details>
<summary>💡 Solução</summary>

```js
let nomes = ["João", "Pedro", "Maria", "Ana"]
let encontrou = false
for (let n of nomes) {
  if (n === "Maria") { encontrou = true; break }
}
console.log(encontrou ? "Encontrado" : "Não encontrado")
```
</details>

---

## Exercício 6

**Desafio:** Crie uma função que recebe um array e retorna a soma dos elementos.

<details>
<summary>💡 Solução</summary>

```js
function somaArray(arr) {
  let s = 0
  for (let n of arr) s += n
  return s
}
console.log(somaArray([1, 2, 3, 4, 5]))  // 15
```
</details>

---

## Exercício 7

**Desafio:** Dado um número N, exiba a tabuada completa de 1 até N (ex: N=2 → tabuada do 1 e do 2).

<details>
<summary>💡 Solução</summary>

```js
let N = 2
for (let t = 1; t <= N; t++) {
  console.log("Tabuada do", t)
  for (let i = 1; i <= 10; i++) {
    console.log(t + " x " + i + " = " + (t * i))
  }
}
```
</details>

---

## Exercício 8

**Desafio:** Dado um array de números, exiba apenas os que são maiores que 10.

<details>
<summary>💡 Solução</summary>

```js
let arr = [5, 12, 3, 15, 8, 20]
for (let n of arr) {
  if (n > 10) console.log(n)
}
```
</details>

---

## Exercício 9

**Desafio:** Crie uma função que recebe um array e retorna o maior número.

<details>
<summary>💡 Solução</summary>

```js
function maiorDoArray(arr) {
  let maior = arr[0]
  for (let n of arr) if (n > maior) maior = n
  return maior
}
console.log(maiorDoArray([3, 7, 2, 9, 1]))  // 9
```
</details>

---

## Exercício 10

**Desafio:** Dado um array de pessoas (nome, nota), exiba o nome de quem teve nota >= 7.

<details>
<summary>💡 Solução</summary>

```js
let alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 }
]
for (let a of alunos) {
  if (a.nota >= 7) console.log(a.nome)
}
```
</details>
