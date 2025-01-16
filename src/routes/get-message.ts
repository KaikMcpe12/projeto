import { FastifyInstance } from "fastify";

export async function hello(app: FastifyInstance) {
    app.get("/hello", async function(request, reply) {
        reply.send({ message: "Hello, World!" })
    })
}