import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss'],
    standalone: true
})
export class Page1Component {
  userName: string|undefined;

constructor( private authSvc: AuthService){}

ngOnInit(){
  this.authSvc.getUser()?.subscribe( user => this.userName = user?.fullName )
}

}
