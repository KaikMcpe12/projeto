import { PrismaClient } from "@prisma/client/extension";
import { IUser } from "../interfaces/IUser";

export class UserRepository {
    constructor(private prisma: PrismaClient){}

    public async findById(id: number): Promise<IUser | null> {
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

    public async createUser(requestUser: IUser): Promise<IUser | null>{
        const user = await this.prisma.user.create({
            data: {
                name: requestUser.name,
                email: requestUser.email
            }
        });

        return user;
    }
}