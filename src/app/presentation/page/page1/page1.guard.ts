import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/service/auth/auth.service'
import { CommonNavigationService } from 'src/app/service/navigation/commonNavigation.component'

export const page1Guard = () => {
    const authService = inject( AuthService )
    const navigation = inject( CommonNavigationService )

    return authService.user$.subscribe( u => {
        if( u ) {
          return true;
        }
        if(navigation.currentCall === '/Page1'){
          navigation.loadComponent('/403');
        }
        return false;
    })
  }