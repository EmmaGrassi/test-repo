import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /*The object that will contain our repositories*/
  repositories: any;

  // error handler object init
  apiError = {
    error: false,
    msg: ''
  };

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    /*Calling the API backend to get the current repositories*/
    this.apiService.fetch('../../assets/mock-data.json').subscribe(
      (repos) => {
        /*We received the data and will assign it. We don't care if it's empty or not, we're handling that in the template*/
        this.repositories = repos;
      },
      (err) => {
        /*We set our error handler object in order to display useful information to the user in the template*/
        this.apiError.error = true;
        this.apiError.msg = err;
      }
    );
  }
}
