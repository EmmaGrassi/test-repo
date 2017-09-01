/*Core*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/*Services*/
import { ApiService } from './shared/api/api.service';

/*Modules*/
import { DevcasesModule } from './devcases/devcases.module';
import { LayoutModule } from './layout/layout.module';

/*Components*/
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DevcasesModule,
    LayoutModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
