import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/api/authentication.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this._authenticationService.signIn()
  /*
    // DELETE THIS RUBBISH
    if (this.model.username === 'sytac' && this.model.password === 'aaa') {
      localStorage.setItem('currentUser', JSON.stringify(this.model.username));
      this.router.navigate([this.returnUrl]);
    } else {
      this.loading = false;
      alert('bad login credentials');
    }
*/

  }
}
