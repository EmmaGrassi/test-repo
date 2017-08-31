import { Component } from '@angular/core';
import { MOCK_DATA } from '../assets/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  repositories: any;

  constructor() {
    this.repositories = MOCK_DATA;
  }
}
