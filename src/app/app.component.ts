import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthorizationCodeFlowConfig } from './auth-config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forntend';

  constructor(private authService: OAuthService){
    this.authService.configure(AuthorizationCodeFlowConfig)
    this.authService.loadDiscoveryDocumentAndLogin()
  }

}
