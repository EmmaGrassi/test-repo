import { Injectable, NgZone } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../shared/api/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService,
              private ngZone: NgZone) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentToken = this.authService.getToken();

    console.info(currentToken);
    console.log('inside canActivate, user logged in? ', this.authService.isUserSignedIn());

    if (!this.authService.isUserSignedIn() && !currentToken) {
      this.ngZone.run(() => this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}));
      return false;
    }
    return true;
  }
}
