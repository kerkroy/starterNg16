import { Observable } from 'rxjs';

export interface FlyInterface {
    id: string;
    travel: string;
    load: string;
    departure: Date;
}

export abstract class FlyRepository {
    abstract getFlyList(): Observable<FlyInterface[]>;
}
