import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/api/authentication.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User;

  private signOutSubscription: Subscription;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private ngZone: NgZone) {
  }

  logout() {
    this.signOutSubscription = this.authService.signOut().subscribe(
      () => {
        console.info('logged out OK ');
        this.ngZone.run(() => this.router.navigateByUrl('/login'));
      },
      (err) => {
        console.warn(err);
      }
    );
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnDestroy() {
    if (this.signOutSubscription) {
      this.signOutSubscription.unsubscribe();
    }
  }
}
