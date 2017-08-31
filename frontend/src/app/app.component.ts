import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  repositories: any;

  // error handler
  apiError = {
    error: false,
    msg: ''
  };

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.fetch('../../assets/mock-data.json').subscribe(
      (repos) => {
        this.repositories = repos;
      },
      (err) => {
        this.apiError.error = true;
        this.apiError.msg = err;
      }
    );
  }
}
