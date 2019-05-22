import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean
  constructor(public router: Router, public cookieService: CookieService) {

   }
   public login(email: string, password: string){
    if(this.cookieService.get('token')){
      this.cookieService.set('user', email);
    } else this.cookieService.set('user', email)
    this.router.navigate(['/main']);
  }
}
