
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AuthService } from './app/service/auth/auth.service';
import { importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './app/service/auth/auth.interceptor';
import { CommonNavigationService } from './app/service/navigation/commonNavigation.component';
import { UserLoginUseCase } from './app/core/user/userLogin.usecase';
import { UserRepository } from './app/core/user/user.model';
import { environment } from './environments/environment';
import { FlyListUseCase } from './app/core/fly/flyList.usecase';
import { FlyRepository } from './app/core/fly/fly.model';

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        { 
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptor, 
            multi: true },
        {
            provide: UserLoginUseCase,
            useFactory: (userRepo: UserRepository) => new UserLoginUseCase(userRepo),
            deps: [UserRepository]
        },
        {
            provide: FlyListUseCase,
            useFactory: (flyRepo: FlyRepository) => new FlyListUseCase(flyRepo),
            deps: [FlyRepository]
        },
        importProvidersFrom(BrowserModule),
        provideRouter(routes),
        AuthService,
        CommonNavigationService,
        provideAnimations(),
        ...environment.providers,
    ]
})
  .catch(err => console.error(err));
