# Semana 9 — Fixação: HTML e CSS

10 exercícios. Crie arquivos `.html` e `.css` e abra no navegador. Cada um: **Desafio** + **Solução** em código.

---

## Exercício 1

**Desafio:** Crie uma página com um título `<h1>` "Minha primeira página" e um parágrafo com uma frase.

<details>
<summary>💡 Solução</summary>

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exercício 1</title>
</head>
<body>
  <h1>Minha primeira página</h1>
  <p>Estou aprendendo HTML e CSS.</p>
</body>
</html>
```
</details>

---

## Exercício 2

**Desafio:** Adicione um botão com o texto "Clique aqui" e id "btn".

<details>
<summary>💡 Solução</summary>

```html
<button id="btn">Clique aqui</button>
```
</details>

---

## Exercício 3

**Desafio:** Crie uma lista não ordenada com 3 itens (ex: Café, Leite, Pão).

<details>
<summary>💡 Solução</summary>

```html
<ul>
  <li>Café</li>
  <li>Leite</li>
  <li>Pão</li>
</ul>
```
</details>

---

## Exercício 4

**Desafio:** Crie um formulário com um input de texto (placeholder "Seu nome") e um botão "Enviar".

<details>
<summary>💡 Solução</summary>

```html
<form>
  <input type="text" placeholder="Seu nome" id="nome">
  <button type="button">Enviar</button>
</form>
```
</details>

---

## Exercício 5

**Desafio:** No CSS, defina a cor de fundo da página como #f0f0f0 e a fonte como sans-serif.

<details>
<summary>💡 Solução</summary>

```css
body {
  background-color: #f0f0f0;
  font-family: sans-serif;
}
```
</details>

---

## Exercício 6

**Desafio:** Centralize o conteúdo da página usando margin: 0 auto e max-width: 600px em um div container.

<details>
<summary>💡 Solução</summary>

```css
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
```
```html
<div class="container"> ... conteúdo ... </div>
```
</details>

---

## Exercício 7

**Desafio:** Estilize todos os títulos h1 com cor #333 e tamanho 2rem.

<details>
<summary>💡 Solução</summary>

```css
h1 {
  color: #333;
  font-size: 2rem;
}
```
</details>

---

## Exercício 8

**Desafio:** Crie uma classe .destaque que deixa o texto em negrito e cor azul (#0066cc).

<details>
<summary>💡 Solução</summary>

```css
.destaque {
  font-weight: bold;
  color: #0066cc;
}
```
```html
<p class="destaque">Texto em destaque</p>
```
</details>

---

## Exercício 9

**Desafio:** Estilize um botão: fundo azul, texto branco, padding 10px 20px, borda arredondada 8px.

<details>
<summary>💡 Solução</summary>

```css
button {
  background-color: #0066cc;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
}
```
</details>

---

## Exercício 10

**Desafio:** Crie um link (<a>) para "Google" que abre em nova aba e estilize com cor #0066cc e sem sublinhado.

<details>
<summary>💡 Solução</summary>

```html
<a href="https://www.google.com" target="_blank" rel="noopener">Google</a>
```
```css
a {
  color: #0066cc;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
```
</details>
