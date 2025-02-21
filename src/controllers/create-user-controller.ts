import { ICreateUser, IUserRepository } from "../interfaces/IUser";
import bcrypt from 'bcrypt'

export class CreateUser {
    constructor(private userRepository: IUserRepository) {}

    public async execute(data: ICreateUser) {
        const { name, email, password, dateBirth } = data

        if(!name || !email || !password) {
            throw new Error('Invalid data')
        }

        const existUser = await this.userRepository.findByEmail(email)

        if(existUser){
            throw new Error('User already exists')
        }

        const newPassword = await bcrypt.hash(password, 10)

        const user = await this.userRepository.createUser({ name, email, password: newPassword, dateBirth })

        return user
    }
}

