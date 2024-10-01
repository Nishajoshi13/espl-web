import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent implements OnInit {
  processing: boolean = false;

   constructor(protected fb: UntypedFormBuilder, private http: HttpClient) {}

  protected formGroup: UntypedFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    message: [null, Validators.required],
    contactNo: [null, [Validators.required]],
  });

  ngOnInit() {}
  get form() {
    return this.formGroup;
  }

  get firstName() {
    return this.form.controls['firstName'] as UntypedFormControl;
  }

  get lastName() {
    return this.form.controls['lastName'] as UntypedFormControl;
  }

  get email() {
    return this.form.controls['email'] as UntypedFormControl;
  }

  get message() {
    return this.form.controls['message'] as UntypedFormControl;
  }

  get contactNo() {
    return this.form.controls['contactNo'] as UntypedFormControl;
  }

  sendEmailVanilla() {
    if (this.form.valid) {
      const sendEmailUrl = `${environment.apiBaseUrl}/send-email`;
      this.http
        .post<any>(sendEmailUrl, this.form.value)
        .pipe(catchError(async () => console.error('Something went wrong')))
        .subscribe(() => {
          Swal.fire({
            title: 'Thanks for your interest!',
            text: 'We will contact you soon.',
            icon: 'success',
            confirmButtonColor: '#1483f8',
          });
        });
    }
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

    this.processing = true;

    const $serviceKey = 'service_ai7j4rw';
    const $templateKey = 'template_ovw9s7e';

    emailjs.send($serviceKey, $templateKey, this.form.value, $options).then(
      () => {
        this.processing = false;
        Swal.fire({
          title: 'Thanks for your interest!',
          text: 'We will contact you soon.',
          icon: 'success',
          confirmButtonColor: '#1483f8',
        });
      },
      (error : any) => {
        console.log(error);
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
        this.processing = false;
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong while processing your request.',
          icon: 'error',
          confirmButtonColor: '#bb3624',
        });
      }
    );
  }
}
