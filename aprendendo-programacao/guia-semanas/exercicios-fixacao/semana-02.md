# Semana 2 — Fixação: Estrutura sequencial

10 exercícios. Rode com `node exercicio-N.js`.

---

## Exercício 1

**Desafio:** Calcule o perímetro de um quadrado de lado 6 e exiba.

<details>
<summary>💡 Solução</summary>

```js
let lado = 6
let perimetro = 4 * lado
console.log("Perímetro:", perimetro)
```
</details>

---

## Exercício 2

**Desafio:** Dado o raio 5, calcule a área do círculo (π * r²). Use Math.PI.

<details>
<summary>💡 Solução</summary>

```js
let raio = 5
let area = Math.PI * raio * raio
console.log("Área do círculo:", area.toFixed(2))
```
</details>

---

## Exercício 3

**Desafio:** Converta 3600 segundos em horas e exiba (ex: "1 hora(s)").

<details>
<summary>💡 Solução</summary>

```js
let segundos = 3600
let horas = segundos / 3600
console.log(horas + " hora(s)")
```
</details>

---

## Exercício 4

**Desafio:** Dado salário bruto 3000 e desconto 10%, exiba o salário líquido.

<details>
<summary>💡 Solução</summary>

```js
let salarioBruto = 3000
let desconto = 0.10
let salarioLiquido = salarioBruto * (1 - desconto)
console.log("Salário líquido: R$", salarioLiquido)
```
</details>

---

## Exercício 5

**Desafio:** Calcule o aumento de 15% sobre um preço 100 e exiba o novo preço.

<details>
<summary>💡 Solução</summary>

```js
let preco = 100
let aumento = 0.15
let novoPreco = preco * (1 + aumento)
console.log("Novo preço: R$", novoPreco)
```
</details>

---

## Exercício 6

**Desafio:** Dados dois números, exiba o maior usando apenas variáveis e comparações (sem if ainda, só descubra qual é maior e exiba).

<details>
<summary>💡 Solução</summary>

```js
let a = 12
let b = 8
let maior = a > b ? a : b  // ou use if na próxima semana
console.log("Maior:", maior)
```
</details>

---

## Exercício 7

**Desafio:** Calcule quantos litros de combustível um carro gasta em 400 km se faz 12 km/l.

<details>
<summary>💡 Solução</summary>

```js
let distancia = 400
let kmPorLitro = 12
let litros = distancia / kmPorLitro
console.log("Litros necessários:", litros.toFixed(2))
```
</details>

---

## Exercício 8

**Desafio:** Dado um valor em metros, exiba o equivalente em centímetros.

<details>
<summary>💡 Solução</summary>

```js
let metros = 2.5
let centimetros = metros * 100
console.log(metros + " m = " + centimetros + " cm")
```
</details>

---

## Exercício 9

**Desafio:** Calcule o IMC: massa 70 kg, altura 1.75 m. Fórmula: IMC = massa / (altura * altura).

<details>
<summary>💡 Solução</summary>

```js
let massa = 70
let altura = 1.75
let imc = massa / (altura * altura)
console.log("IMC:", imc.toFixed(2))
```
</details>

---

## Exercício 10

**Desafio:** Exiba o dobro e o triplo de um número armazenado em uma variável.

<details>
<summary>💡 Solução</summary>

```js
let num = 5
console.log("Dobro:", num * 2)
console.log("Triplo:", num * 3)
```
</details>
