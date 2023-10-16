import { Observable } from 'rxjs';

export interface UserInterface {
    id: string;
    fullName: string;
    userName: string;
    email?: string;
    expireAt: Date;
    activationStatus: boolean;
    roles?: Array<string>;
}

export abstract class UserRepository {
    abstract login(params: {username: string, password: string}): Observable<UserInterface>;
    abstract getUserProfile(): Observable<UserInterface>;
}
