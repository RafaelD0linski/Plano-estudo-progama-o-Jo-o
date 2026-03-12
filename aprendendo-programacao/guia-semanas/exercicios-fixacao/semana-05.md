# Semana 5 — Fixação: Funções

10 exercícios. Rode com `node exercicio-N.js`.

---

## Exercício 1

**Desafio:** Crie uma função `soma(a, b)` que retorna a soma dos dois números. Chame com 5 e 3 e exiba.

<details>
<summary>💡 Solução</summary>

```js
function soma(a, b) {
  return a + b
}
console.log(soma(5, 3))  // 8
```
</details>

---

## Exercício 2

**Desafio:** Crie uma função `media(n1, n2, n3)` que retorna a média de três notas.

<details>
<summary>💡 Solução</summary>

```js
function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3
}
console.log(media(8, 7, 9).toFixed(1))
```
</details>

---

## Exercício 3

**Desafio:** Crie uma função `maiorDeIdade(idade)` que retorna true se idade >= 18, senão false.

<details>
<summary>💡 Solução</summary>

```js
function maiorDeIdade(idade) {
  return idade >= 18
}
console.log(maiorDeIdade(20))   // true
console.log(maiorDeIdade(15))   // false
```
</details>

---

## Exercício 4

**Desafio:** Crie uma função `parOuImpar(n)` que retorna a string "Par" ou "Ímpar".

<details>
<summary>💡 Solução</summary>

```js
function parOuImpar(n) {
  if (n % 2 === 0) return "Par"
  return "Ímpar"
}
console.log(parOuImpar(4))   // Par
console.log(parOuImpar(7))   // Ímpar
```
</details>

---

## Exercício 5

**Desafio:** Crie uma função `dobro(n)` que retorna o dobro do número.

<details>
<summary>💡 Solução</summary>

```js
function dobro(n) {
  return n * 2
}
console.log(dobro(5))  // 10
```
</details>

---

## Exercício 6

**Desafio:** Crie uma função `areaRetangulo(base, altura)` que retorna a área.

<details>
<summary>💡 Solução</summary>

```js
function areaRetangulo(base, altura) {
  return base * altura
}
console.log(areaRetangulo(5, 8))  // 40
```
</details>

---

## Exercício 7

**Desafio:** Crie uma função `max(a, b)` que retorna o maior dos dois números.

<details>
<summary>💡 Solução</summary>

```js
function max(a, b) {
  if (a > b) return a
  return b
}
console.log(max(10, 25))  // 25
```
</details>

---

## Exercício 8

**Desafio:** Crie uma função `positivoOuNegativo(n)` que retorna "Positivo", "Negativo" ou "Zero".

<details>
<summary>💡 Solução</summary>

```js
function positivoOuNegativo(n) {
  if (n > 0) return "Positivo"
  if (n < 0) return "Negativo"
  return "Zero"
}
console.log(positivoOuNegativo(-3))  // Negativo
```
</details>

---

## Exercício 9

**Desafio:** Crie uma função `fatorial(n)` que retorna o fatorial de n (ex: fatorial(5) = 120).

<details>
<summary>💡 Solução</summary>

```js
function fatorial(n) {
  let resultado = 1
  for (let i = n; i >= 1; i--) {
    resultado *= i
  }
  return resultado
}
console.log(fatorial(5))  // 120
```
</details>

---

## Exercício 10

**Desafio:** Crie uma função `aprovado(nota)` que retorna true se nota >= 7, false caso contrário.

<details>
<summary>💡 Solução</summary>

```js
function aprovado(nota) {
  return nota >= 7
}
console.log(aprovado(8))   // true
console.log(aprovado(5))   // false
```
</details>
