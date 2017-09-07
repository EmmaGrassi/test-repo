import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import GoogleUser = gapi.auth2.GoogleUser;
import { User } from '../models/user.model';

@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  fetch(url: string): Observable<any> {
    return this.http
      .get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /*MOCK BE REQUESTS*/
  checkUser(user: GoogleUser): Observable<any> {
    let beUser: User = {
      name: 'Riccardo Polacci',
      email: 'riccardo.polacci@sytac.io',
      role: 'recruiter'
    };

    return Observable.create(observer => {
      observer.next(beUser);
    }).publish().refCount();
  }

  private extractData(res: Response) {
    const body = res.json();
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
