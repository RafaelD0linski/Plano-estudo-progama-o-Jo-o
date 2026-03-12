# Semana 3 — Fixação: Estrutura condicional (if/else)

10 exercícios. Rode com `node exercicio-N.js`.

---

## Exercício 1

**Desafio:** Dada uma idade, exiba "Maior de idade" ou "Menor de idade".

<details>
<summary>💡 Solução</summary>

```js
let idade = 17
if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
```
</details>

---

## Exercício 2

**Desafio:** Dado um número, exiba "Positivo", "Negativo" ou "Zero".

<details>
<summary>💡 Solução</summary>

```js
let num = -5
if (num > 0) {
  console.log("Positivo")
} else if (num < 0) {
  console.log("Negativo")
} else {
  console.log("Zero")
}
```
</details>

---

## Exercício 3

**Desafio:** Dada uma nota (0 a 10), exiba "Aprovado" se >= 7, senão "Reprovado".

<details>
<summary>💡 Solução</summary>

```js
let nota = 6.5
if (nota >= 7) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}
```
</details>

---

## Exercício 4

**Desafio:** Verifique se um número é par (exiba "Par" ou "Ímpar"). Use resto da divisão por 2.

<details>
<summary>💡 Solução</summary>

```js
let n = 10
if (n % 2 === 0) {
  console.log("Par")
} else {
  console.log("Ímpar")
}
```
</details>

---

## Exercício 5

**Desafio:** Dados dois números, exiba o maior (ou "Iguais" se forem iguais).

<details>
<summary>💡 Solução</summary>

```js
let a = 10
let b = 10
if (a > b) {
  console.log("Maior:", a)
} else if (b > a) {
  console.log("Maior:", b)
} else {
  console.log("Iguais")
}
```
</details>

---

## Exercício 6

**Desafio:** Dada a média do aluno, exiba: "Aprovado" (>= 7), "Recuperação" (>= 5 e < 7) ou "Reprovado" (< 5).

<details>
<summary>💡 Solução</summary>

```js
let media = 5.5
if (media >= 7) {
  console.log("Aprovado")
} else if (media >= 5) {
  console.log("Recuperação")
} else {
  console.log("Reprovado")
}
```
</details>

---

## Exercício 7

**Desafio:** Verifique se um ano é bissexto. Regra: divisível por 400, ou (divisível por 4 e não por 100).

<details>
<summary>💡 Solução</summary>

```js
let ano = 2024
if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
  console.log("Bissexto")
} else {
  console.log("Não é bissexto")
}
```
</details>

---

## Exercício 8

**Desafio:** Dado um número, exiba "É múltiplo de 5" ou "Não é múltiplo de 5".

<details>
<summary>💡 Solução</summary>

```js
let num = 25
if (num % 5 === 0) {
  console.log("É múltiplo de 5")
} else {
  console.log("Não é múltiplo de 5")
}
```
</details>

---

## Exercício 9

**Desafio:** Simule um login: usuário "admin" e senha "123". Se ambos corretos, exiba "Acesso permitido", senão "Acesso negado".

<details>
<summary>💡 Solução</summary>

```js
let usuario = "admin"
let senha = "123"
if (usuario === "admin" && senha === "123") {
  console.log("Acesso permitido")
} else {
  console.log("Acesso negado")
}
```
</details>

---

## Exercício 10

**Desafio:** Dado o preço de um produto, se for maior que 100 exiba "Caro", senão "Barato".

<details>
<summary>💡 Solução</summary>

```js
let preco = 150
if (preco > 100) {
  console.log("Caro")
} else {
  console.log("Barato")
}
```
</details>
