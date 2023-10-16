import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Injectable()
export class CommonNavigationService {

  public canceledUrl: string;
  public currentUrl: string;
  public currentCall: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.currentUrl = event.url;
      }else if (event instanceof NavigationStart){
        this.currentCall = event.url;
      }else if (event instanceof NavigationCancel && !['/', '/403'].includes(event.url)) {        
        this.canceledUrl = event.url;
      };
    });
  }

  reloadForbidden(){
    if( this.currentUrl === "/403" && this.canceledUrl !== undefined ){
      this.reloadComponent(false, this.canceledUrl)
    } 
  }

  loadComponent(url: string){
    this.router.navigate([`/${url}`])
  }

  reloadComponent( self: boolean, urlToNavigateTo?: string ){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([`/${self ? this.router.url: urlToNavigateTo}`])
    })
  }
  
  reloadCurrent(){
    this.reloadComponent(true);
  }

  reloadPage(){
    window.location.reload()
  }

}
