import { Injectable, NgZone } from '@angular/core';
import * as _ from 'lodash';
import { GoogleAuthService } from 'ng-gapi/lib/GoogleAuthService';
import GoogleUser = gapi.auth2.GoogleUser;
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser = undefined;

  constructor(private googleAuthService: GoogleAuthService,
              private ngZone: NgZone) {
  }

  public setUser(user: GoogleUser): void {
    this.user = user;
  }

  public getCurrentUser(): GoogleUser {
    return this.user;
  }

  public getToken(): any {
    let token: string = sessionStorage.getItem(AuthenticationService.SESSION_STORAGE_KEY);
    if (!token) {
      return false;
    }
    return sessionStorage.getItem(AuthenticationService.SESSION_STORAGE_KEY);
  }

  public signIn() {
    return Observable.create(observer => {
      this.googleAuthService.getAuth().subscribe(
        (auth) => {
          auth.signIn().then(
            res => observer.next(this.signInSuccessHandler(res)),
            err => observer.error(this.signInErrorHandler(err))
          );
        }
      );
    }).publish().refCount();
  }

  public signOut() {
    return Observable.create(observer => {
      this.googleAuthService.getAuth().subscribe(
        (auth) => {
          auth.signOut().then(
            res => {
              sessionStorage.removeItem(AuthenticationService.SESSION_STORAGE_KEY);
              observer.next(res)
            },
            err => observer.error(this.signOutErrorHandler(err))
          );
        },
        (error) => {
          console.warn(error)
        }
      );
    }).publish().refCount();
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(AuthenticationService.SESSION_STORAGE_KEY));
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(
      () => {
        this.user = res;
        sessionStorage.setItem(
          AuthenticationService.SESSION_STORAGE_KEY, res.getAuthResponse().id_token
        );
      });
    return this.user;
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }

  private signOutErrorHandler(err) {
    console.warn(err);
  }
}
