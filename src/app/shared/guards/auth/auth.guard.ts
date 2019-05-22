import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router, public cookieService: CookieService){}

  canActivate(): boolean{
    if(this.cookieService.get('user')){
      console.log('true')
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
      
  }
  
}
