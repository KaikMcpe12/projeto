import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { UserRepository } from "../repository/user-repository";

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

            const userRepository = new UserRepository(prisma)

            const user = await userRepository.createUser({ name, email })

            return { userEmail: user?.email }
        })
}