export interface IUser {
    id: number;
    name: string;
    email: string | null;
}

export interface ICreateUser {
    name: string;
    email: string | null;
}

export interface IUserRepository {
    findById(id: number): Promise<IUser | null>;
    create(user: ICreateUser): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
}
