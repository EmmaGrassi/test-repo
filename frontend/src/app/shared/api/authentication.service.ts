import {Injectable, NgZone} from "@angular/core";
import * as _ from "lodash";
import {GoogleAuthService} from "ng-gapi/lib/GoogleAuthService";
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;

@Injectable()
export class AuthenticationService {
  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
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

  public getToken(): string {
    let token: string = sessionStorage.getItem(AuthenticationService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(AuthenticationService.SESSION_STORAGE_KEY);
  }

  public signIn() {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn().then(res => this.signInSuccessHandler(res), err => this.signInErrorHandler(err));
    });
  }

  public signOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(AuthenticationService.SESSION_STORAGE_KEY)
    });
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(AuthenticationService.SESSION_STORAGE_KEY));
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      this.user = res;
      console.log(this.user);
      sessionStorage.setItem(
        AuthenticationService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
      );
    });
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }
}
