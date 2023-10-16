import { Observable } from 'rxjs';
import { UseCase } from '../useCase';
import { UserInterface, UserRepository } from './user.model';

export class GetUserProfileUseCase implements UseCase<void, UserInterface> {
    constructor(private userRepository: UserRepository) { }
    execute(): Observable<UserInterface> {
        return this.userRepository.getUserProfile();
    }
}