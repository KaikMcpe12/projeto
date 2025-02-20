import { ICreateUser, IUser, IUserRepository } from "../interfaces/IUser";
import bcrypt from 'bcrypt'

export class CreateUser {
    constructor(private userRepository: IUserRepository) {}

    public async execute(data: ICreateUser): Promise<IUser> {
        const { name, email, password, dateBirth } = data

        if(!name || !email || !password) {
            throw new Error('Invalid data provided');
        }

        const existUser = await this.userRepository.findByEmail(email)

        if(existUser) {
            throw new Error('User already exists');
        }

        const newPassword = await bcrypt.hash(password, 10)

        const user = await this.userRepository.createUser({ name, email, password: newPassword, dateBirth })

        return user;
    }
}