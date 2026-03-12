# Semana 6 — Fixação: Arrays (vetores)

10 exercícios. Rode com `node exercicio-N.js`.

---

## Exercício 1

**Desafio:** Crie um array com 5 frutas e exiba o primeiro e o último elemento.

<details>
<summary>💡 Solução</summary>

```js
let frutas = ["maçã", "banana", "laranja", "uva", "manga"]
console.log(frutas[0])
console.log(frutas[frutas.length - 1])
```
</details>

---

## Exercício 2

**Desafio:** Dado o array [10, 20, 30, 40, 50], calcule e exiba a soma de todos os elementos.

<details>
<summary>💡 Solução</summary>

```js
let numeros = [10, 20, 30, 40, 50]
let soma = 0
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]
}
console.log("Soma:", soma)
```
</details>

---

## Exercício 3

**Desafio:** Encontre o maior número em um array [3, 7, 2, 9, 1, 5].

<details>
<summary>💡 Solução</summary>

```js
let arr = [3, 7, 2, 9, 1, 5]
let maior = arr[0]
for (let n of arr) {
  if (n > maior) maior = n
}
console.log("Maior:", maior)
```
</details>

---

## Exercício 4

**Desafio:** Percorra o array ["a", "b", "c", "d"] e exiba cada elemento com seu índice (ex: "0: a").

<details>
<summary>💡 Solução</summary>

```js
let letras = ["a", "b", "c", "d"]
for (let i = 0; i < letras.length; i++) {
  console.log(i + ": " + letras[i])
}
```
</details>

---

## Exercício 5

**Desafio:** Calcule a média dos números do array [8, 7, 9, 6, 10].

<details>
<summary>💡 Solução</summary>

```js
let notas = [8, 7, 9, 6, 10]
let soma = 0
for (let n of notas) soma += n
let media = soma / notas.length
console.log("Média:", media)
```
</details>

---

## Exercício 6

**Desafio:** Conte quantos elementos tem o array [1, 2, 3, 4, 5] e exiba.

<details>
<summary>💡 Solução</summary>

```js
let arr = [1, 2, 3, 4, 5]
console.log("Quantidade:", arr.length)
```
</details>

---

## Exercício 7

**Desafio:** Dado um array de números, exiba apenas os pares.

<details>
<summary>💡 Solução</summary>

```js
let numeros = [1, 2, 3, 4, 5, 6]
for (let n of numeros) {
  if (n % 2 === 0) console.log(n)
}
```
</details>

---

## Exercício 8

**Desafio:** Encontre o menor número no array [12, 5, 8, 20, 3].

<details>
<summary>💡 Solução</summary>

```js
let arr = [12, 5, 8, 20, 3]
let menor = arr[0]
for (let n of arr) {
  if (n < menor) menor = n
}
console.log("Menor:", menor)
```
</details>

---

## Exercício 9

**Desafio:** Crie um array vazio, adicione 3 nomes com push e exiba o array.

<details>
<summary>💡 Solução</summary>

```js
let nomes = []
nomes.push("Ana")
nomes.push("Bruno")
nomes.push("Carla")
console.log(nomes)
```
</details>

---

## Exercício 10

**Desafio:** Inverta a ordem do array [1, 2, 3, 4] e exiba o novo array (sem usar reverse).

<details>
<summary>💡 Solução</summary>

```js
let arr = [1, 2, 3, 4]
let invertido = []
for (let i = arr.length - 1; i >= 0; i--) {
  invertido.push(arr[i])
}
console.log(invertido)  // [4, 3, 2, 1]
```
</details>
