import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { PrismaUserRepository } from "../prisma/repository/user-repository";
import createUserController from "../controller/create-user-controller";

export async function createUser(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post("/user",
        {
            schema: {
                body: z.object({
                    name: z.string(),
                    email: z.string()
                })
            }
        },
        async (request) => {
            const { name, email } = request.body

            const prismaClient = new PrismaUserRepository(prisma)
            const userId = await createUserController(prismaClient, { name, email})

            return { userId }
        })
}