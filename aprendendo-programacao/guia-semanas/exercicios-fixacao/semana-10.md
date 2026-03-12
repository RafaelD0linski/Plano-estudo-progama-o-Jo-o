# Semana 10 — Fixação: JavaScript no navegador

10 exercícios. Use HTML + JS (pode ser dentro de `<script>` no próprio HTML). Abra o arquivo no navegador.

---

## Exercício 1

**Desafio:** Ao clicar em um botão, exiba um alert "Olá!".

<details>
<summary>💡 Solução</summary>

```html
<button id="btn">Clique</button>
<script>
  document.getElementById("btn").onclick = function() {
    alert("Olá!")
  }
</script>
```
</details>

---

## Exercício 2

**Desafio:** Tenha um parágrafo com id "texto". Ao clicar no botão, mude o texto do parágrafo para "Texto alterado!".

<details>
<summary>💡 Solução</summary>

```html
<p id="texto">Texto original</p>
<button id="btn">Alterar</button>
<script>
  document.getElementById("btn").onclick = function() {
    document.getElementById("texto").textContent = "Texto alterado!"
  }
</script>
```
</details>

---

## Exercício 3

**Desafio:** Um input (id "nome") e um botão. Ao clicar, exiba um alert com "Olá, [valor do input]!".

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="nome" placeholder="Seu nome">
<button id="btn">Dizer olá</button>
<script>
  document.getElementById("btn").onclick = function() {
    let nome = document.getElementById("nome").value
    alert("Olá, " + nome + "!")
  }
</script>
```
</details>

---

## Exercício 4

**Desafio:** Dois inputs (n1 e n2) e um botão "Somar". Ao clicar, exiba a soma em um parágrafo (id "resultado").

<details>
<summary>💡 Solução</summary>

```html
<input type="number" id="n1" placeholder="Número 1">
<input type="number" id="n2" placeholder="Número 2">
<button id="btn">Somar</button>
<p id="resultado"></p>
<script>
  document.getElementById("btn").onclick = function() {
    let a = Number(document.getElementById("n1").value)
    let b = Number(document.getElementById("n2").value)
    document.getElementById("resultado").textContent = "Soma: " + (a + b)
  }
</script>
```
</details>

---

## Exercício 5

**Desafio:** Um botão e um contador (parágrafo). A cada clique, incremente e exiba o contador (0, 1, 2, 3...).

<details>
<summary>💡 Solução</summary>

```html
<p id="contador">0</p>
<button id="btn">+1</button>
<script>
  let count = 0
  document.getElementById("btn").onclick = function() {
    count++
    document.getElementById("contador").textContent = count
  }
</script>
```
</details>

---

## Exercício 6

**Desafio:** Input de texto e botão "Validar". Se o input estiver vazio, exiba alert "Preencha o campo!". Senão, "OK!".

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="campo" placeholder="Digite algo">
<button id="btn">Validar</button>
<script>
  document.getElementById("btn").onclick = function() {
    let valor = document.getElementById("campo").value.trim()
    if (valor === "") {
      alert("Preencha o campo!")
    } else {
      alert("OK!")
    }
  }
</script>
```
</details>

---

## Exercício 7

**Desafio:** Um parágrafo. Ao passar o mouse sobre ele, mude a cor do texto para azul; ao tirar o mouse, volte ao preto.

<details>
<summary>💡 Solução</summary>

```html
<p id="p">Passe o mouse aqui</p>
<script>
  let p = document.getElementById("p")
  p.onmouseenter = function() { p.style.color = "blue" }
  p.onmouseleave = function() { p.style.color = "black" }
</script>
```
</details>

---

## Exercício 8

**Desafio:** Botão que alterna o texto de um parágrafo entre "Ligado" e "Desligado" a cada clique.

<details>
<summary>💡 Solução</summary>

```html
<p id="estado">Desligado</p>
<button id="btn">Alternar</button>
<script>
  document.getElementById("btn").onclick = function() {
    let p = document.getElementById("estado")
    p.textContent = p.textContent === "Desligado" ? "Ligado" : "Desligado"
  }
</script>
```
</details>

---

## Exercício 9

**Desafio:** Select com 3 opções (ex: "Opção A", "B", "C"). Ao mudar a seleção, exiba o valor escolhido em um parágrafo.

<details>
<summary>💡 Solução</summary>

```html
<select id="select">
  <option value="A">Opção A</option>
  <option value="B">Opção B</option>
  <option value="C">Opção C</option>
</select>
<p id="saida">Escolha: </p>
<script>
  document.getElementById("select").onchange = function() {
    let v = this.value
    document.getElementById("saida").textContent = "Escolha: " + v
  }
</script>
```
</details>

---

## Exercício 10

**Desafio:** Dois inputs (usuário e senha) e botão "Entrar". Se usuário for "admin" e senha "123", alert "Acesso OK". Senão, "Dados incorretos".

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="user" placeholder="Usuário">
<input type="password" id="senha" placeholder="Senha">
<button id="btn">Entrar</button>
<script>
  document.getElementById("btn").onclick = function() {
    let u = document.getElementById("user").value
    let s = document.getElementById("senha").value
    if (u === "admin" && s === "123") {
      alert("Acesso OK")
    } else {
      alert("Dados incorretos")
    }
  }
</script>
```
</details>
