import { PrismaClient } from "@prisma/client";
import { ICreateUser, IUser, IUserRepository } from "../interface/IUser";

export class PrismaUserRepository implements IUserRepository {
    constructor(private prisma: PrismaClient) {}

    public async findById(id: number): Promise<IUser | null> {
        return await this.prisma.user.findUnique({
            where: { id },
        })
    }

    public async create(user: ICreateUser): Promise<IUser> {
        return await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
            },
        })
    }

    public async findByEmail(email: string): Promise<IUser | null> {
        return await this.prisma.user.findFirst({
            where: { email },
        })
    }
}