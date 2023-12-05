import { Component } from '@angular/core';
import { SignupModalService } from '../../services/signup-modal.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showModal: boolean = false;

  constructor(private signUpService: SignupModalService, private authService: OAuthService) {}

  showSignUpModal() {
    this.signUpService.setModalVisibility(true);
  }

  logOut(){
    this.authService.logOut()
  }
}
