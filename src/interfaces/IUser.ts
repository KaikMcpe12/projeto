export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    dateBith: string;
}

export interface ICreateUser{
    name: string;
    email: string;
    password: string;
    dateBirth: Date | null;
}

export interface IUserRepository {
    findById(id: string): Promise<IUser | null>
    findByEmail(email: string): Promise<IUser | null>
    createUser(requestUser: ICreateUser): Promise<IUser>
}
