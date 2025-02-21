import { PrismaClient } from "@prisma/client/extension";
import { ICreateUser, IUser, IUserRepository } from "../interfaces/IUser";

export class UserRepository implements IUserRepository{
    constructor(private prisma: PrismaClient){}

    public async findById(id: string): Promise<IUser | null> {
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    public async findByEmail(email: string): Promise<IUser | null> {
        return await this.prisma.user.findUnique({
            where: {
                email
            }
        })
    }

    public async createUser(requestUser: ICreateUser): Promise<IUser>{
        const user = await this.prisma.user.create({
            data: {
                name: requestUser.name,
                email: requestUser.email,
                password: requestUser.password,
                dateBirth: requestUser.dateBirth
            }
        });

        return user;
    }
}