# Semanas 11+ — Fixação: Projetos (desafios em código)

10 desafios de projeto. Cada um: **Desafio** + **Solução** em código (HTML/CSS/JS ou só JS quando for lógica).

---

## Exercício 1

**Desafio:** Página com dois inputs (número 1 e número 2) e quatro botões: Soma, Subtração, Multiplicação, Divisão. Exiba o resultado em um parágrafo.

<details>
<summary>💡 Solução</summary>

```html
<input type="number" id="n1"><input type="number" id="n2">
<button onclick="calcular('+')">Soma</button>
<button onclick="calcular('-')">Subtração</button>
<button onclick="calcular('*')">Mult</button>
<button onclick="calcular('/')">Div</button>
<p id="r">Resultado: </p>
<script>
  function calcular(op) {
    let a = Number(document.getElementById("n1").value)
    let b = Number(document.getElementById("n2").value)
    let res = op === '+' ? a + b : op === '-' ? a - b : op === '*' ? a * b : a / b
    document.getElementById("r").textContent = "Resultado: " + res
  }
</script>
```
</details>

---

## Exercício 2

**Desafio:** Lista de tarefas: input + botão "Adicionar". Ao clicar, adicione o texto como item em uma lista (<ul>). Cada item com botão "Remover".

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="tarefa" placeholder="Nova tarefa">
<button id="add">Adicionar</button>
<ul id="lista"></ul>
<script>
  document.getElementById("add").onclick = function() {
    let texto = document.getElementById("tarefa").value.trim()
    if (!texto) return
    let li = document.createElement("li")
    li.textContent = texto + " "
    let btn = document.createElement("button")
    btn.textContent = "Remover"
    btn.onclick = function() { li.remove() }
    li.appendChild(btn)
    document.getElementById("lista").appendChild(li)
    document.getElementById("tarefa").value = ""
  }
</script>
```
</details>

---

## Exercício 3

**Desafio:** Formulário de login: usuário e senha. Botão "Entrar". Se vazios, exiba mensagem em vermelho "Preencha todos os campos". Se preenchidos, exiba em verde "Enviado!".

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="user" placeholder="Usuário">
<input type="password" id="senha" placeholder="Senha">
<button id="btn">Entrar</button>
<p id="msg"></p>
<script>
  document.getElementById("btn").onclick = function() {
    let u = document.getElementById("user").value.trim()
    let s = document.getElementById("senha").value.trim()
    let p = document.getElementById("msg")
    if (u === "" || s === "") {
      p.textContent = "Preencha todos os campos"
      p.style.color = "red"
    } else {
      p.textContent = "Enviado!"
      p.style.color = "green"
    }
  }
</script>
```
</details>

---

## Exercício 4

**Desafio:** Controle de gastos: input descrição, input valor (number), botão "Adicionar". Liste os gastos e exiba o total abaixo.

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="desc" placeholder="Descrição">
<input type="number" id="valor" placeholder="Valor" step="0.01">
<button id="add">Adicionar</button>
<ul id="gastos"></ul>
<p id="total">Total: R$ 0,00</p>
<script>
  let total = 0
  document.getElementById("add").onclick = function() {
    let desc = document.getElementById("desc").value.trim()
    let val = Number(document.getElementById("valor").value)
    if (!desc || val <= 0) return
    total += val
    let li = document.createElement("li")
    li.textContent = desc + " - R$ " + val.toFixed(2)
    document.getElementById("gastos").appendChild(li)
    document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2)
    document.getElementById("desc").value = ""
    document.getElementById("valor").value = ""
  }
</script>
```
</details>

---

## Exercício 5

**Desafio:** Um botão e um div. A cada clique, adicione um quadrado (div 50x50px, cor aleatória) dentro do div.

<details>
<summary>💡 Solução</summary>

```html
<button id="btn">Adicionar quadrado</button>
<div id="container" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
<script>
  document.getElementById("btn").onclick = function() {
    let div = document.createElement("div")
    div.style.width = "50px"
    div.style.height = "50px"
    div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    document.getElementById("container").appendChild(div)
  }
</script>
```
</details>

---

## Exercício 6

**Desafio:** Input de texto e botão. Ao clicar, adicione o texto em uma lista; se o texto já existir na lista, não adicione e exiba alert "Já existe!".

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="item" placeholder="Item">
<button id="btn">Adicionar</button>
<ul id="lista"></ul>
<script>
  let itens = []
  document.getElementById("btn").onclick = function() {
    let texto = document.getElementById("item").value.trim()
    if (itens.includes(texto)) {
      alert("Já existe!")
      return
    }
    itens.push(texto)
    let li = document.createElement("li")
    li.textContent = texto
    document.getElementById("lista").appendChild(li)
    document.getElementById("item").value = ""
  }
</script>
```
</details>

---

## Exercício 7

**Desafio:** Contador com botões "+" e "-". O número não pode ser menor que 0 nem maior que 10.

<details>
<summary>💡 Solução</summary>

```html
<button id="menos">-</button>
<span id="num">0</span>
<button id="mais">+</button>
<script>
  let n = 0
  function atualizar() {
    document.getElementById("num").textContent = n
  }
  document.getElementById("menos").onclick = function() {
    if (n > 0) { n--; atualizar() }
  }
  document.getElementById("mais").onclick = function() {
    if (n < 10) { n++; atualizar() }
  }
</script>
```
</details>

---

## Exercício 8

**Desafio:** Select com opções "Vermelho", "Verde", "Azul". Ao mudar, altere a cor de fundo do body.

<details>
<summary>💡 Solução</summary>

```html
<select id="cor">
  <option value="">Escolha uma cor</option>
  <option value="red">Vermelho</option>
  <option value="green">Verde</option>
  <option value="blue">Azul</option>
</select>
<script>
  document.getElementById("cor").onchange = function() {
    document.body.style.backgroundColor = this.value || "white"
  }
</script>
```
</details>

---

## Exercício 9

**Desafio:** Lista de tarefas com checkbox. Ao marcar, risque o texto do item (text-decoration: line-through).

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="t" placeholder="Tarefa">
<button id="add">Adicionar</button>
<ul id="lista"></ul>
<script>
  document.getElementById("add").onclick = function() {
    let texto = document.getElementById("t").value.trim()
    if (!texto) return
    let li = document.createElement("li")
    let cb = document.createElement("input")
    cb.type = "checkbox"
    cb.onchange = function() {
      li.style.textDecoration = cb.checked ? "line-through" : "none"
    }
    li.appendChild(cb)
    li.appendChild(document.createTextNode(" " + texto))
    document.getElementById("lista").appendChild(li)
    document.getElementById("t").value = ""
  }
</script>
```
</details>

---

## Exercício 10

**Desafio:** Simule um cadastro: nome, email, idade. Botão "Cadastrar". Valide: nome e email não vazios, idade entre 1 e 120. Exiba "Cadastrado!" ou mensagem de erro.

<details>
<summary>💡 Solução</summary>

```html
<input type="text" id="nome" placeholder="Nome">
<input type="email" id="email" placeholder="E-mail">
<input type="number" id="idade" placeholder="Idade" min="1" max="120">
<button id="btn">Cadastrar</button>
<p id="msg"></p>
<script>
  document.getElementById("btn").onclick = function() {
    let nome = document.getElementById("nome").value.trim()
    let email = document.getElementById("email").value.trim()
    let idade = Number(document.getElementById("idade").value)
    let p = document.getElementById("msg")
    if (!nome) { p.textContent = "Nome obrigatório"; p.style.color = "red"; return }
    if (!email) { p.textContent = "E-mail obrigatório"; p.style.color = "red"; return }
    if (idade < 1 || idade > 120) { p.textContent = "Idade entre 1 e 120"; p.style.color = "red"; return }
    p.textContent = "Cadastrado!"
    p.style.color = "green"
  }
</script>
```
</details>
