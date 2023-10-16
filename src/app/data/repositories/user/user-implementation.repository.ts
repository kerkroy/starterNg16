import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserImplementationRepositoryMapper, UserEntity } from './user.entity.mapper';
import { UserInterface, UserRepository } from 'src/app/core/user/user.model';

export class UserImplementationRepository extends UserRepository {
    
    private userMapper = new UserImplementationRepositoryMapper();
    
    constructor(private http: HttpClient) {
        super();
    }
    
    login(params: {username: string, password: string}): Observable<UserInterface> {
        return this.http
            .post<UserEntity>( environment.userLoginUrl, {params})
            .pipe(map(this.userMapper.mapFrom));
    }
    
    getUserProfile(): Observable<UserInterface>{
        return this.http.get<UserEntity>(environment.userLoginUrl).pipe(
            map(this.userMapper.mapFrom));
    }
}