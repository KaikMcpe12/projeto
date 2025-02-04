import { ICreateUser, IUserRepository } from "../prisma/interface/IUser";

export default async function createUserController(userReposiotory: IUserRepository, requestUser: ICreateUser): Promise<{ userId: number }> {
    const { name, email } = requestUser;

    if (!name || !email) {
        throw new Error("Nome e email são obrigatórios");
    }

    const existUser = await userReposiotory.findByEmail(email);

    if (existUser) {
        throw new Error("Já existe um usuário com este email");
    }

    const user = await userReposiotory.create({ name, email });

    return { userId: user.id };
}