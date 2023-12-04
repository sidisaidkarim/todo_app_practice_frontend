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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddTaskModalComponent } from './core/modals/add-task-modal/add-task-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpRequestInterceptor } from './core/interceptors/HttpRequestInterceptor';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavbarComponent,
    TasklistComponent,
    SignupModalComponent,
    AddTaskModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
