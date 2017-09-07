import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/api/authentication.service';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  returnUrl: string;

  private signIngSub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _authenticationService: AuthenticationService,
              private ngZone: NgZone,
              private apiService: ApiService) {
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.signIngSub = this._authenticationService.signIn().subscribe(
      (user) => {
        console.info('success when logging in with Google', user);

        this.apiService.checkUser(user).subscribe(
          (user) => {
            sessionStorage.setItem(
              'currentUser', JSON.stringify(user)
            );
            console.info('success when requesting security check to BE', user);
            this.ngZone.run(() => this.router.navigateByUrl(this.returnUrl));
          },
          (error) => {
            console.warn('error when requesting security check to BE', error);
          }
        );
      },
      (err) => {
        console.warn('err when logging in', err);
      }
    );
  }

  ngOnDestroy() {
    if (this.signIngSub) {
      this.signIngSub.unsubscribe();
    }
  }
}
