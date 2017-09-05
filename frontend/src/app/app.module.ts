/*Core*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

/*Services*/
import { ApiService } from './shared/api/api.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './shared/api/authentication.service';

/*Modules*/
import { DashboardModule } from './dashboard/dashboard.module';

/*Components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ClientConfig, GoogleApiModule, NG_GAPI_CONFIG} from 'ng-gapi';

const GOOGLE_CLIENT_ID = '189868751709-oq1sgg1qkgj49h6pdk88uvfqiipmhlns.apps.googleusercontent.com';

let gapiClientConfig: ClientConfig = {
    clientId: GOOGLE_CLIENT_ID,
    discoveryDocs: [],
    //uncomment this later, after the changes in the console are propagated
    //ux_mode: 'redirect',
    //redirect_uri: 'http://localhost:4200/auth/google_oauth2/callback',
    scope: [].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    routing,
    GoogleApiModule.forRoot({
        provide: NG_GAPI_CONFIG,
        useValue: gapiClientConfig
    }),
  ],
  providers: [
    ApiService,
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
