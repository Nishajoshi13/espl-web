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
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}
  progressBars=[ 
  {
      text:"APP DEVELOPMENT",
      percentage:80,
  },
  {
    text:"WEBSITE DEVLOPMENT",
    percentage:87,
},
{
  text:"AI/ML DEVLOPMENT",
  percentage:80,
},
{
  text:"SOFTWARE DEVLOPMENT",
  percentage:80,
}];

  // Optionally, a function to update progress values
  updateProgress(index: number, newProgress: number) {
    if (index >= 0 && index < this.progressBars.length) {
      this.progressBars[index].percentage = newProgress;
    }
  }

  ngOnInit() {}
}
