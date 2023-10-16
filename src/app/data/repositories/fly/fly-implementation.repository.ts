import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FlyImplementationRepositoryMapper, FlyEntity } from './fly.entity.mapper';
import { FlyInterface, FlyRepository } from 'src/app/core/fly/fly.model';

export class FlyImplementationRepository extends FlyRepository {
    
    private userMapper = new FlyImplementationRepositoryMapper();
    
    constructor(private http: HttpClient) {
        super();
    }
    
    getFlyList(): Observable<FlyInterface[]> {
        return this.http
            .post<FlyEntity[]>( environment.userLoginUrl, {})
            .pipe(map(this.userMapper.mapFrom));
    }
}