/*Core*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Components*/
import { DevcasesTableComponent } from './devcases-table/devcases-table.component';
import { AddCandidateFormComponent } from './add-candidate-form/add-candidate-form.component';


@NgModule({
  declarations: [
    AddCandidateFormComponent,
    DevcasesTableComponent
  ],
  exports: [
    AddCandidateFormComponent,
    DevcasesTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class DevcasesModule {
}
