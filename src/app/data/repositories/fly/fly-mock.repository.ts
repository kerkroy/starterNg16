import { Observable, map, of } from 'rxjs';
import { FlyImplementationRepositoryMapper, FlyEntity } from './fly.entity.mapper';
import { FlyInterface, FlyRepository } from 'src/app/core/fly/fly.model';

export class FlyMockRepository extends FlyRepository {

    private flyMapper = new FlyImplementationRepositoryMapper();
    private mockFly: FlyEntity[];

    constructor() {
        super();
        this.mockFly = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));
    }

    getFlyList(): Observable<FlyInterface[]> {
        return of(this.mockFly)
            .pipe(map(this.flyMapper.mapFrom));
    }

    /** Builds and returns a new User. */
    createNewUser(id: number): FlyEntity {    /** Constants used to fill up our data base. */
      const NAMES: string[] = [
        'Paris',
        'Montpellier',
        'Beyrouth',
        'Londres',
        'Berlin',
        'Tambouktou',
        'Marakech',
        'Barcelone',
        'Rome',
        'Pragues',
        'Pekin',
        'Tokyo',
        'Jerusalem',
        'Moscou',
        'Kiev',
        'Amsterdam',
        'Bangkok',
        'Doha',
        'Santiago',
      ];
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' - ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] ;
  
    return {
      id: id.toString(),
      travel: name,
      load: Math.round(Math.random() * 100).toString(),
      departure: new Date()
    };
  
  }
}