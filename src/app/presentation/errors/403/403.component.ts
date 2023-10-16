import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/core/user/user.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CommonNavigationService } from 'src/app/service/navigation/commonNavigation.component';

@Component({
  selector: 'app-403',
  templateUrl: './403.component.html',
  styleUrls: ['./403.component.scss'],
  standalone: true
})
export class RefusedComponent implements OnInit {

  constructor( private navigation: CommonNavigationService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe( (user: UserInterface|null) => {
        if( user ) {
          this.navigation.reloadForbidden();
        }
    })
  }

}
