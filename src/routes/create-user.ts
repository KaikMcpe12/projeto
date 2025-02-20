import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { UserRepository } from "../repository/user-repository";
import { CreateUser } from "../controller/create-user-controller";

export async function createUser(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post("/user",
        {
            schema: {
                body: z.object({
                    name: z.string(),
                    email: z.string().email(),
                    password: z.string(),
                    dateBirth: z.nullable(z.string().date())
                })
            }
        },
        async (request) => {
            const { name, email, password, dateBirth } = request.body

            const userRepository = new UserRepository(prisma)
            const createUser = new CreateUser(userRepository)

            const user = await createUser.execute({ name, email, password, dateBirth })

            return { userEmail: user.email }
        })
}
