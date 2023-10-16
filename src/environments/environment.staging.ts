import { UserRepository } from 'src/app/core/user/user.model';
import { HttpClient } from '@angular/common/http';
import { UserImplementationRepository } from 'src/app/data/repositories/user/user-implementation.repository';
import { FlyRepository } from 'src/app/core/fly/fly.model';
import { FlyImplementationRepository } from 'src/app/data/repositories/fly/fly-implementation.repository';

export const environment = {
    production: false,
    env: 'staging',
    userLoginUrl: 'https://example.com/login',
    userDetailsUrl: 'https://example.com/user',
    providers: [ 
      { 
        provide: UserRepository, 
        useFactory: (http: HttpClient) => new UserImplementationRepository(http),
        deps: [HttpClient]
      },
      { 
        provide: FlyRepository, 
        useFactory: (http: HttpClient) => new FlyImplementationRepository(http),
        deps: [HttpClient]
      }
    ]
  };