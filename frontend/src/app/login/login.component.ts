import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;

    // DELETE THIS RUBBISH
    if (this.model.username === 'sytac' && this.model.password === 'aaa') {
      localStorage.setItem('currentUser', JSON.stringify(this.model.username));
      this.router.navigate([this.returnUrl]);
    } else {
      this.loading = false;
      alert('bad login credentials');
    }

    // this.authenticationService.login(this.model.username, this.model.password)
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
  }
}
