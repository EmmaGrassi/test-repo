import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../../shared/api/authentication.service';

declare const gapi: any;

@Component({
  selector: 'google-authentication',
  templateUrl: './google-authentication.component.html',
  styleUrls: ['./google-authentication.component.scss']
})
export class GoogleAuthenticationComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  login() {
    console.log(this._authenticationService);
    this._authenticationService.signIn()
    }

}
