import { Component, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/api/authentication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
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

  ngOnDestroy() {
    if (this.signOutSubscription) {
      this.signOutSubscription.unsubscribe();
    }
  }
}
