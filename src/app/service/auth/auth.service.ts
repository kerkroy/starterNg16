import { Injectable } from '@angular/core';

import { UserInterface } from 'src/app/core/user/user.model';
import { Observable, BehaviorSubject, first } from 'rxjs';
import { UserLoginUseCase } from 'src/app/core/user/userLogin.usecase';

@Injectable()
export class AuthService {

  public user$: BehaviorSubject<UserInterface|null> = new BehaviorSubject<UserInterface|null>( null );
  public expire$: BehaviorSubject<number|null> = new BehaviorSubject<number|null>( null );
  public interval: string | number | NodeJS.Timeout | undefined;

  constructor(public userLogin: UserLoginUseCase) {
    this.user$.subscribe( user => {  
      if( user ) {
        if( this.interval !== undefined ){
          clearInterval( this.interval );
        }
        const updateExpire = () => {
          clearInterval( this.interval );
          let [Second, Minute] = [1000, 60000], 
            expiration = {
              delay: this.getExpirationDelay(user.expireAt),
              threshold: Minute/1000*2
            },
            loop = expiration.delay <= expiration.threshold ? Second: Minute;
          if( expiration.delay <= 0) {
            this.user$.next( null );
            this.expire$.next( null );
            this.interval = undefined;
          } else {
            if( loop === Second ){
              this.expire$.next( expiration.delay );
            }
            this.interval = setInterval( updateExpire, loop );
          }
        }
        updateExpire();
      } else {
        clearInterval( this.interval )
        this.expire$.next( null );
      }
    })
  }

  getUser(): Observable<UserInterface|null> {
    return this.user$.asObservable();
  }

  addUser(data: {username: string, password: string}){
      this.userLogin.execute(data).pipe(first()).subscribe( (user: UserInterface) => {
        this.user$.next( user )
      })
  }

  getExpirationDelay = (expireAt: Date) => Math.round(((expireAt.getTime() - new Date().getTime()) / 1000));

}
