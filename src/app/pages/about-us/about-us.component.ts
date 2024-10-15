import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
export class AboutUsComponent implements OnInit, AfterViewInit {
  currentNumber: number = 0;
  targetNumber: number = 50;
  duration: number = 2000;

  constructor() {}
  progressBars = [
    {
      text: 'APP DEVELOPMENT',
      percentage: 80,
    },
    {
      text: 'WEBSITE DEVLOPMENT',
      percentage: 87,
    },
    {
      text: 'AI/ML DEVLOPMENT',
      percentage: 80,
    },
    {
      text: 'SOFTWARE DEVLOPMENT',
      percentage: 80,
    },
  ];

  cards = [
    {
      img: '/assets/icon/icon/icon/icon/about us/human.webp',
      title: 'CEO',
    },
    {
      img: '/assets/icon/icon/icon/icon/about us/human.webp',
      title: 'CEO',
    },
    {
      img: '/assets/icon/icon/icon/icon/about us/human.webp',
      title: 'CEO',
    },
    {
      img: '/assets/icon/icon/icon/icon/about us/human.webp',
      title: 'CEO',
    },
  ];

  updateProgress(index: number, newProgress: number) {
    if (index >= 0 && index < this.progressBars.length) {
      this.progressBars[index].percentage = newProgress;
    }
  }

  ngOnInit() {}
  @ViewChild('counter') counterElement!: ElementRef;
  ngAfterViewInit() {
    this.observeVisibility();
  }
  startCounting() {
    const intervalTime = 50;
    const totalIncrements = this.duration / intervalTime;
    const increment = this.targetNumber / totalIncrements;

    const interval = setInterval(() => {
      if (this.currentNumber < this.targetNumber) {
        this.currentNumber += increment;
        this.currentNumber = Math.min(
          Math.round(this.currentNumber),
          this.targetNumber
        );
      } else {
        this.currentNumber = this.targetNumber;
        clearInterval(interval);
      }
    }, intervalTime);
  }
  observeVisibility() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.disconnect(); 
        }
      });
    });

    observer.observe(this.counterElement.nativeElement);
  }
}
