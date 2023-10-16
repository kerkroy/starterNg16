import { Observable, map, of } from 'rxjs';
import { UserImplementationRepositoryMapper, UserEntity } from './user.entity.mapper';
import { UserInterface, UserRepository } from 'src/app/core/user/user.model';

export class UserMockRepository extends UserRepository {
    
    private userMapper = new UserImplementationRepositoryMapper();
    private mockUser: UserEntity = {
        id: '1',
        fullName: 'Romain CROYERE', 
        userName: 'Romain',
        email: 'romain.croyere@atos.net',
        expireAt: new Date,
        activationStatus: true,
        roles: ['admin']
      };

    getMockuser = ( date: Date ) => {
        date.setMinutes( date.getMinutes() + 3 ); 
        return {... this.mockUser, expireAt: date}; 
    }

    login(params: {username: string, password: string}): Observable<UserInterface> {
        return of(this.getMockuser( new Date ))
            .pipe(map(this.userMapper.mapFrom));
    }

    getUserProfile(): Observable<UserInterface>{
        return of(this.mockUser)
            .pipe(map(this.userMapper.mapFrom));
    }
}