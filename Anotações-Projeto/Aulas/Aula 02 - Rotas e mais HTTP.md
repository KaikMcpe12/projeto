# 🪧Aula 02 - Rotas e mais HTTP
Na aula anterior, vimos sobre a estrutura da requisição HTTP, hoje vamos aprofundar esse conhecimento. Uma requisição pode ter diferentes propósitos, como ver uma informação, enviar, deletar, atualizar entre outros. Essas ações são demarcadas pelo verbo HTTP, o que conhecemos é o “GET”, ele permite receber informação.

Existem ainda:

- POST → envia informação, usado em formulários para login por exemplo
- DELETE → deleta a informação passada
- PUT → atualiza a informação passada para uma nova

Vale ressaltar, esses verbos só indicam qual o intuito da requisição, não executam a ação em si, isso depende do código que você escrever para aquele cenário.

Outra parte da requisição que vimos foi o status code. Quem nunca acessou um site e viu um “Erro 404: not found”? Esse código diz respeito a resposta e como ela ocorreu. Se você conseguiu criar uma conta na sua rede social preferida você recebe um código 201, ao tentar acessar uma aba inexistente do site você recebe um código 404.

Em resumo os códigos seguem esse padrão:

- **1xx**: Informação
- **2xx**: Sucesso
- **3xx**: Redirecionamento
- **4xx**: Erro do cliente
- **5xx**: Erro do servidor

Para praticar: entre em um site e explore a aba de network ou rede, do devtools, lá você consegue ver as requisições que acontecem do site acessado

Agora chegou o momento de aplicar isso ao nosso backend, para isso utilizaremos rotas, que são basicamente pontos do servidor que recebem requisições de um certo tipo e quando acessados retornam informação. Na aula passada vimos uma rota de get ser implementada, quando acessada ela retornou um json com uma mensagem de “hello, world”.

Implementaremos agora uma nova rota do tipo post.

```jsx
app.post(”/hello”, async function(request, reply) {
	const { name } = request.body
	
	reply.send({ message: `Olá, ${name}!` })
})
```

Também podemos usar essa forma:

```jsx
app.post(”/hello/:name”, async function(request, reply) {
	const { name } = request.params
	
	reply.send({ message: `Olá, ${name}!` })
})
```

Ou ainda:

```jsx
app.post("/?name=", async function(request, reply) {
	const { name } = request.query
	
	reply.send({ message: `Olá, ${name}!` })
})
```

Como dito, a rota post envia informação, que pode ser acessada pelo nosso código, essa informação está associada com o objeto request, então podemos desestruturá-lo para acessar seus dados.

Com isso, temos as peças para construir backends com diversas funções e possibilidades.