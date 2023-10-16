import { FlyRepository } from "src/app/core/fly/fly.model";
import { UserRepository } from "src/app/core/user/user.model";
import { FlyMockRepository } from "src/app/data/repositories/fly/fly-mock.repository";
import { UserMockRepository } from "src/app/data/repositories/user/user-mock.repository";

export const environment = {
    production: false,
    env: 'dev',
    userLoginUrl: 'https://example.com/login',
    userDetailsUrl: 'https://example.com/user',
    providers: [ 
      { 
        provide: UserRepository, 
        useFactory: () => new UserMockRepository()
      },
      { 
        provide: FlyRepository, 
        useFactory: () => new FlyMockRepository()
      }
    ]
  };