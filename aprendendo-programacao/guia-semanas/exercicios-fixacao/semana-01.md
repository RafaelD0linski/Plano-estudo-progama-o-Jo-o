# Semana 1 — Fixação: Variáveis e estrutura sequencial

10 exercícios para rodar com `node exercicio-N.js`. Tente fazer o **Desafio** antes de ver a **Solução**.

---

## Exercício 1

**Desafio:** Crie duas variáveis: `nome` e `idade`. Exiba no console a mensagem: "Olá, [nome], você tem [idade] anos."

<details>
<summary>💡 Solução</summary>

```js
let nome = "João"
let idade = 20
console.log("Olá, " + nome + ", você tem " + idade + " anos.")
```
</details>

---

## Exercício 2

**Desafio:** Declare variáveis `a = 10` e `b = 3`. Exiba a soma, a subtração e a multiplicação entre elas.

<details>
<summary>💡 Solução</summary>

```js
let a = 10
let b = 3
console.log("Soma:", a + b)
console.log("Subtração:", a - b)
console.log("Multiplicação:", a * b)
```
</details>

---

## Exercício 3

**Desafio:** Calcule a área de um retângulo (base = 5, altura = 8) e exiba o resultado.

<details>
<summary>💡 Solução</summary>

```js
let base = 5
let altura = 8
let area = base * altura
console.log("Área do retângulo:", area)
```
</details>

---

## Exercício 4

**Desafio:** Converta uma temperatura de 30 graus Celsius para Fahrenheit. Fórmula: F = C * 9/5 + 32.

<details>
<summary>💡 Solução</summary>

```js
let celsius = 30
let fahrenheit = celsius * 9/5 + 32
console.log(celsius + "°C = " + fahrenheit + "°F")
```
</details>

---

## Exercício 5

**Desafio:** Crie variáveis para preço (29.90) e quantidade (3). Calcule e exiba o total.

<details>
<summary>💡 Solução</summary>

```js
let preco = 29.90
let quantidade = 3
let total = preco * quantidade
console.log("Total: R$ " + total.toFixed(2))
```
</details>

---

## Exercício 6

**Desafio:** Declare `x = 7` e `y = 2`. Exiba o resultado da divisão e o resto da divisão (módulo).

<details>
<summary>💡 Solução</summary>

```js
let x = 7
let y = 2
console.log("Divisão:", x / y)
console.log("Resto (módulo):", x % y)
```
</details>

---

## Exercício 7

**Desafio:** Armazene seu primeiro nome e sobrenome em variáveis. Exiba o nome completo em uma única string.

<details>
<summary>💡 Solução</summary>

```js
let primeiroNome = "Maria"
let sobrenome = "Silva"
let nomeCompleto = primeiroNome + " " + sobrenome
console.log(nomeCompleto)
```
</details>

---

## Exercício 8

**Desafio:** Dado um valor em reais (100), exiba quantos dólares dá (cotação 5.50).

<details>
<summary>💡 Solução</summary>

```js
let reais = 100
let cotacao = 5.50
let dolares = reais / cotacao
console.log("R$ " + reais + " = US$ " + dolares.toFixed(2))
```
</details>

---

## Exercício 9

**Desafio:** Calcule a média de três notas: 8, 7 e 9. Exiba o resultado.

<details>
<summary>💡 Solução</summary>

```js
let nota1 = 8
let nota2 = 7
let nota3 = 9
let media = (nota1 + nota2 + nota3) / 3
console.log("Média:", media.toFixed(1))
```
</details>

---

## Exercício 10

**Desafio:** Troque os valores de duas variáveis `p = 1` e `q = 2` (sem digitar números de novo). Depois exiba `p` e `q`.

<details>
<summary>💡 Solução</summary>

```js
let p = 1
let q = 2
let temp = p
p = q
q = temp
console.log("p =", p, "q =", q)
```
</details>
