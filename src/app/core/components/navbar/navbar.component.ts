import { Component } from '@angular/core';
import { SignupModalService } from '../../services/signup-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showModal: boolean = false;

  constructor(private signUpService: SignupModalService) {}

  showSignUpModal() {
    this.signUpService.setModalVisibility(true);
  }
}
