import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api/api.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'devcases-table',
  templateUrl: './devcases-table.component.html',
  styleUrls: ['./devcases-table.component.scss']
})
export class DevcasesTableComponent implements OnInit, OnDestroy {
  /*The object that will contain our repositories*/
  repositories: any;

  // error handler object init
  apiError = {
    error: false,
    msg: ''
  };

  private reposSub: Subscription;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    console.log('DevcasesTableComponent ngOnInit');

    /*Calling the API backend to get the current repositories*/
    this.reposSub = this.apiService.fetch('../../assets/mock-data.json').subscribe(
      (repos) => {
        /*We received the data and will assign it. We don't care if it's empty or not, we're handling that in the template*/
        this.repositories = repos;
        console.log('DevcasesTableComponent fetching OK', repos);
      },
      (err) => {
        /*We set our error handler object in order to display useful information to the user in the template*/
        this.apiError.error = true;
        this.apiError.msg = err;
        console.warn('DevcasesTableComponent fetching OK', err);
      }
    );
  }

  ngOnDestroy() {
    if (this.reposSub) {
      this.reposSub.unsubscribe();
    }
  }
}
