import fastify from "fastify"
import { hello } from "./routes/get-message"
import { createUser } from "./routes/create-user"
import {
    serializerCompiler,
    validatorCompiler,
} from 'fastify-type-provider-zod'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(hello)
app.register(createUser)

app.listen({ port: 3000 }).then(() => {
    console.log("On air")
})
