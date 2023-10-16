import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { LoginDialog } from '../login/login.component';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserInterface } from 'src/app/core/user/user.model';
import { CommonNavigationService } from 'src/app/service/navigation/commonNavigation.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      NgIf,
      MatDialogModule,
      LoginDialog]
})
export class MenuComponent implements OnInit {

  user: UserInterface | null;
  expirationBoxHasPop: boolean = false;
  
  constructor(public dialog: MatDialog, public authService: AuthService, public commonNavigation: CommonNavigationService) {}

  ngOnInit() {
    this.authService.expire$.subscribe ( timer => {
      if(timer){
        if( !this.expirationBoxHasPop ){
          this.expirationBoxHasPop = true;
          this.dialog.open(LoginDialog, {
            data: {
              name: 'Expiration de Session', 
              username: this.user?.userName, 
              password: null, 
              expire: this.authService.expire$
            },
          });
        }
      }
    })
    this.authService.user$.subscribe( u => {
      this.user = u;
      this.expirationBoxHasPop = false;
    })
  }

  openDialog(): void {
    this.dialog.open(LoginDialog, {
      data: {name: 'Login', username: this.user?.userName, password: null},
    });
  }

  goToPage(url: string){
    this.commonNavigation.loadComponent(url)
  }

  disconnect(){
    this.authService.user$.next( null );
    this.commonNavigation.reloadForbidden();
  }

}
