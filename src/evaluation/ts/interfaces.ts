import User from './User';

export interface UserRepository {
    getUserById(id: number): User | undefined;
    updateUser(user: User): void;
}

export interface UserLiveData {
    value: User | undefined;
}
