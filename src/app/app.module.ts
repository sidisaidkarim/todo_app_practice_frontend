import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from '../app/core/pages/welcomepage/welcomepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { TasklistComponent } from './core/pages/tasklist/tasklist.component';
import { SignupModalComponent } from './core/modals/signup-modal/signup-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavbarComponent,
    TasklistComponent,
    SignupModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
