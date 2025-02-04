import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export async function createUser(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post("/user",
        {
            schema: {
                body: z.object({
                    nome: z.string(),
                    email: z.string()
                })
            }
        },
        async (request) => {
            const { nome, email } = request.body

            const user = await prisma.user.create({
                data: {
                    name: nome,
                    email: email
                }
            })

            return { userId: user.id }
        })
}