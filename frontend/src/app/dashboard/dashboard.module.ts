/*Core*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Components*/
import { DevcasesTableComponent } from './devcases-table/devcases-table.component';
import { AddCandidateFormComponent } from './add-candidate-form/add-candidate-form.component';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    AddCandidateFormComponent,
    DevcasesTableComponent,
    DashboardComponent
  ],
  exports: [
    AddCandidateFormComponent,
    DevcasesTableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: []
})
export class DashboardModule {
}
