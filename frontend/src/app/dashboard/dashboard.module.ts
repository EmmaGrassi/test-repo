/*Core*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Modules*/
import { LayoutModule } from '../layout/layout.module';
import { UtilsModule } from '../shared/utils/utils.module';

/*Components*/
import { DevcasesTableComponent } from './devcases-table/devcases-table.component';
import { AddCandidateFormComponent } from './add-candidate-form/add-candidate-form.component';
import { DashboardComponent } from './dashboard.component';

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
    LayoutModule,
    UtilsModule
  ],
  providers: []
})
export class DashboardModule {
}
