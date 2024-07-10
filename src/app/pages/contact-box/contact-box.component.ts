import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {catchError, merge} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MatDialogClose} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {environment} from "../../../environments/environment";
import Swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";
import emailjs, {type EmailJSResponseStatus} from "@emailjs/browser";

@Component({
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogClose, MatIconModule],
  templateUrl: './contact-box.component.html',
  styleUrl: './contact-box.component.scss',
  animations: [
    trigger('dialogAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.7)' })),
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in')
      ]),
    ]),
  ],

})
export class ContactBoxComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required, Validators.minLength(2)]);
  connectButton:boolean = false;
  mailError = '';
  nameError = '';
  constructor(private http: HttpClient) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateMailError());
    merge(this.firstName.statusChanges, this.firstName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateNameError());

  }

  updateNameError(){
    if(this.firstName.hasError('required')){
      this.nameError = 'Name is required';
    } else if(this.firstName.hasError('minlength')){
      this.nameError = 'Minimum 2 characters required';
    } else {
      this.nameError = '';
    }
  }
  updateMailError() {
    if (this.email.hasError('required')) {
      this.mailError = 'Email is Required';
    } else if (this.email.hasError('email')) {
      this.mailError = 'Not a valid email';
    } else {
      this.mailError = '';
    }
  }

  isFormValid():boolean{
    return this.firstName.valid && this.email.valid
  }

  sendEmail(e: Event) {

    e.preventDefault();
    const $options = {
      publicKey: environment.emailJsPublicKey,
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 20000,
      },
    };
    const form = {
      firstName: this.firstName.value,
      lastName: '',
      email: this.email.value,
      message: 'Contacted through contact box popup',
      contactNo: '9999999999'
    }
    const $serviceKey = 'service_ai7j4rw';
    const $templateKey = 'template_ovw9s7e';

    emailjs.send($serviceKey, $templateKey, form, $options).then(
      () => {
        Swal.fire({
          title: 'Thanks for your interest!',
          text: 'We will contact you soon.',
          icon: 'success',
          confirmButtonColor: '#1483f8',
        });
        this.email.reset('');
        this.firstName.reset('')
      },
      (error : any) => {
        console.log(error);
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong while processing your request.',
          icon: 'error',
          confirmButtonColor: '#bb3624',
        });
        this.email.reset('');
        this.firstName.reset('')
      },
  );
  }
}
