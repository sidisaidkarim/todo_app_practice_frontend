import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupModalService {
  private showModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  modalState$ = this.showModal.asObservable();

  setModalVisibility(value: boolean) {
    this.showModal.next(value);
  }

  getModalVisibility() {
    return this.showModal.value;
  }
}
