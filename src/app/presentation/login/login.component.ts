import {Component, Inject } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AuthService } from 'src/app/service/auth/auth.service';
import { CommonNavigationService } from 'src/app/service/navigation/commonNavigation.component';
import { timeFormatPipe } from '../login/timeFormat.pipe';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

export interface DialogData {
  name: string;
  username: string;
  password: string;
  expire: Observable<number>;
}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, AsyncPipe, timeFormatPipe, NgIf]
})
export class LoginDialog {
  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    public authService: AuthService,
    public commonNavigation: CommonNavigationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  loginHandler(data: DialogData){
    this.authService.addUser( data );
    this.commonNavigation.reloadForbidden();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
