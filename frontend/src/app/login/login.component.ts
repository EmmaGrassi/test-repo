import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/api/authentication.service';
import { Subscription } from 'rxjs/Subscription';

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
              private ngZone: NgZone) {
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.signIngSub = this._authenticationService.signIn().subscribe(
      () => {
        this.ngZone.run(() => this.router.navigateByUrl(this.returnUrl));
        console.info('success when logging in');
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
