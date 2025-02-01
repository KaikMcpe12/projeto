# 🧱 Aula 1 - Fundamentos
O primeiro passo no estudo de programação (ainda mais quando se fala de backend) é conhecer a base, entendendo e formando uma base firme para aprender cada vez mais. Também se espera que você já tenha alguma base com JavaScript, ou outra linguagem de programação.

No backend trabalhamos de forma muito abstrata, não temos muito costume de ver retornos visuais para a maioria das coisas que fazemos. Isso se deve principalmente por fazermos tratamentos de dados, então lidamos com rotas de API’s, conexões com banco de dados, uso de padrões de design, uso de contêineres, etc.

```ts
import { once } from 'node:events'
import { createServer } from 'node:http'

async function HttpHandler(request, response) {
    try {
        const data = await once(request, 'data')
        response.writeHead(200)
    } catch (e) {
        response.writeHead(500)
    }
}

const app = createServer(HttpHandler)
.listen(3333)
.on('listening', () => console.log("servidor http no ar!"))
```
> Esse é um exemplo de servidor http feito com javascript de forma vanila

```jsx
import fastify from "fastify";

const app = fastify()

app.get("/", function (request, reply) {
    return "Olá, Mundo!"
})

app.listen({ port: 3000 }).then(() => {
    console.log("Servidor no ar!")
})
```
> Já esse servidor é construído com ajuda de frameworks

Um bom começo para os estudos são como as coisas conversam, os nomes dos indivíduos de hoje são “Servidor HTTP” e “JSON”. O primeiro diz respeito a um servidor que regula o envio de arquivos entre servidor e o cliente, isso por meio de um protocolo de mesmo nome. O segundo é mais geral, os arquivos JSON são basicamente objetos javascript, com uma chave relacionada com um valor. JSON é amplamente usado hoje em dia, ele é usado na conversa entre back e front, no envio de dados por API’s e até no carregamento de dados de jogos como GTA V.

```ts
{
    
    "cliente": {
        "id": 2020,
        "nome": "Maria Aparecida"
    },
    "pagamentos": [
        {
            "id": 123,
            "descricao": "Compra do livro Cangaceiro JavaScript",
            "valor": 50.5
        },
        {
            "id": 124,
            "descricao": "Mensalidade escolar",
            "valor": 1500
        }
    ]
 }
```

```ts
const fs = require('fs')
const dados = fs.readFileSync('data.json', 'utf8')
const data = JSON.parse(dados)
console.log(data['pagamentos'])
```

Esse é um exemplo de como com javascript podemos utilizar JSON.