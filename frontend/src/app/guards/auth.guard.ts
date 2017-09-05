import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../shared/api/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('inside canActivate ' + this.authService.isUserSignedIn());
    if (!this.authService.isUserSignedIn()) {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
    return true;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //
  //   // Instead of using localStorage we should check with Google APIs.
  //   // And if user is logged in with Google we should check with the backend
  //
  //
  //   if (sessionStorage.getItem('accessToken')) {
  //     // logged in so return true
  //     return true;
  //   }
  //
  //   // not logged in so redirect to login page with the return url
  //   this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  //   return false;
  // }
}
