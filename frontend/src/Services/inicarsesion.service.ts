import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public loginService: LoginService, public router: Router) {

  }

  canActivate(): boolean {

    
    if (this.loginService.estaLogueado()) {
        this.router.navigate(['/farmacia/gestionar-proveedor']);
      return true;
    } else {
        alert ('error al ingresar los datos')
        this.router.navigate(['/']);
      return false;
    }
  }
}