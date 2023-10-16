import { Observable } from 'rxjs';
import { UseCase } from '../useCase';
import { FlyInterface, FlyRepository } from './fly.model';

export class FlyListUseCase implements UseCase<null, FlyInterface[]> {
    constructor(private flyRepository: FlyRepository) { }
    execute(): Observable<FlyInterface[]> {
        return this.flyRepository.getFlyList();
    }
}