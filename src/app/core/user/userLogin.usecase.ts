import { Observable } from 'rxjs';
import { UseCase } from '../useCase';
import { UserInterface, UserRepository } from './user.model';

export class UserLoginUseCase implements UseCase<{ username: string; password: string }, UserInterface> {
    constructor(private userRepository: UserRepository) { }
    execute(
       params: { username: string, password: string },
    ): Observable<UserInterface> {
        return this.userRepository.login(params);
    }
}