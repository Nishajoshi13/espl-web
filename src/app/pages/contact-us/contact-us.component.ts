import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(protected fb: FormBuilder, private http: HttpClient) {}

  protected formGroup: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    message: [null, Validators.required],
    contactNo: [
      null,
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    ],
  });

  ngOnInit() {}

  get form() {
    return this.formGroup;
  }

  get firstName() {
    return this.form.controls['firstName'] as FormControl;
  }

  get lastName() {
    return this.form.controls['lastName'] as FormControl;
  }

  get email() {
    return this.form.controls['email'] as FormControl;
  }

  get message() {
    return this.form.controls['message'] as FormControl;
  }

  get contactNo() {
    return this.form.controls['contactNo'] as FormControl;
  }

  sendEmail() {
    console.log(this.form.valid);
    if (this.form.valid) {
      const sendEmailUrl = `${environment.apiBaseUrl}/send-email`;
      this.http
        .post<any>(sendEmailUrl, this.form.value)
        .pipe(catchError(async () => console.error('Something went wrong')))
        .subscribe(() => {
          Swal.fire({
            title: 'Thank you!',
            text: 'You submitted succesfully!',
            icon: 'success',
            confirmButtonColor: '#1483f8',
          });
        });
    }
  }
}
