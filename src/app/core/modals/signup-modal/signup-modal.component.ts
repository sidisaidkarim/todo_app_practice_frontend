import { Component } from '@angular/core';
import { SignupModalService } from '../../services/signup-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css'],
})
export class SignupModalComponent {
  modalOpen: boolean = true;

  constructor(
    private signupModalService: SignupModalService,
    private router: Router
  ) {
    this.signupModalService.modalState$.subscribe((state) => {
      this.modalOpen = state;
    });
  }

  closeModal() {
    this.signupModalService.setModalVisibility(false);
  }

  submit() {
    this.closeModal();
    this.router.navigate(['/tasks']);
  }
}
