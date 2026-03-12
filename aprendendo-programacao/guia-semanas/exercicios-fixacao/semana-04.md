# Semana 4 — Fixação: Loops (for, while)

10 exercícios. Rode com `node exercicio-N.js`.

---

## Exercício 1

**Desafio:** Exiba os números de 1 até 10, um por linha.

<details>
<summary>💡 Solução</summary>

```js
for (let i = 1; i <= 10; i++) {
  console.log(i)
}
```
</details>

---

## Exercício 2

**Desafio:** Exiba a tabuada do 7 (7 x 1 até 7 x 10).

<details>
<summary>💡 Solução</summary>

```js
let n = 7
for (let i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + (n * i))
}
```
</details>

---

## Exercício 3

**Desafio:** Faça uma contagem regressiva de 10 até 1 e exiba "Fogo!".

<details>
<summary>💡 Solução</summary>

```js
for (let i = 10; i >= 1; i--) {
  console.log(i)
}
console.log("Fogo!")
```
</details>

---

## Exercício 4

**Desafio:** Some todos os números de 1 a 100 e exiba o resultado.

<details>
<summary>💡 Solução</summary>

```js
let soma = 0
for (let i = 1; i <= 100; i++) {
  soma += i
}
console.log("Soma de 1 a 100:", soma)
```
</details>

---

## Exercício 5

**Desafio:** Exiba apenas os números pares entre 0 e 20 (0, 2, 4, ... 20).

<details>
<summary>💡 Solução</summary>

```js
for (let i = 0; i <= 20; i += 2) {
  console.log(i)
}
```
</details>

---

## Exercício 6

**Desafio:** Exiba os 10 primeiros múltiplos de 3 (3, 6, 9, ...).

<details>
<summary>💡 Solução</summary>

```js
for (let i = 1; i <= 10; i++) {
  console.log(3 * i)
}
```
</details>

---

## Exercício 7

**Desafio:** Calcule o fatorial de 5 (5! = 5*4*3*2*1 = 120).

<details>
<summary>💡 Solução</summary>

```js
let n = 5
let fatorial = 1
for (let i = n; i >= 1; i--) {
  fatorial *= i
}
console.log("5! =", fatorial)
```
</details>

---

## Exercício 8

**Desafio:** Use um loop para exibir "Olá" 5 vezes.

<details>
<summary>💡 Solução</summary>

```js
for (let i = 0; i < 5; i++) {
  console.log("Olá")
}
```
</details>

---

## Exercício 9

**Desafio:** Exiba os números de 20 até 10 (em ordem decrescente).

<details>
<summary>💡 Solução</summary>

```js
for (let i = 20; i >= 10; i--) {
  console.log(i)
}
```
</details>

---

## Exercício 10

**Desafio:** Some apenas os números ímpares de 1 a 50 e exiba o resultado.

<details>
<summary>💡 Solução</summary>

```js
let soma = 0
for (let i = 1; i <= 50; i += 2) {
  soma += i
}
console.log("Soma dos ímpares de 1 a 50:", soma)
```
</details>
