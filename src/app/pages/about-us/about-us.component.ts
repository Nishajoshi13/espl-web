import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  QueryList,
  ViewChildren,
  OnDestroy
} from '@angular/core';



@Component({
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit, AfterViewInit, OnDestroy {
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
      img: '/assets/images/about-us/human.webp',
      title: 'CEO',
    },
    {
      img: '/assets/images/about-us/human.webp',
      title: 'CEO',
    },
    {
      img: '/assets/images/about-us/human.webp',
      title: 'CEO',
    },
    {
      img: '/assets/images/about-us/human.webp',
      title: 'CEO',
    },
  ];

  updateProgress(index: number, newProgress: number) {
    if (index >= 0 && index < this.progressBars.length) {
      this.progressBars[index].percentage = newProgress;
    }
  }
  progressValue = 0;
  
  @ViewChild('counter') counterElement!: ElementRef;
  @ViewChildren('progressBarContainer') progressBarContainers!: QueryList<ElementRef>;
  ngAfterViewInit() {
    this.observeVisibility();
    this.observeProgressBars();
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
  observeProgressBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBarElement = entry.target as HTMLElement;
          const index = parseInt(progressBarElement.getAttribute('data-index')!, 10); 
          this.increaseProgress(index);
          observer.unobserve(entry.target); 
        }
      });
    });
  
    this.progressBarContainers.forEach((progressBar, index) => {
      progressBar.nativeElement.setAttribute('data-index', index.toString());
      observer.observe(progressBar.nativeElement);
    });
  }
  
  increaseProgress(index: number) {
    const targetValue = this.progressBars[index].percentage;
    let currentValue = 0;
  
    const interval = setInterval(() => {
      currentValue += 5;
      this.progressBars[index].percentage = Math.min(currentValue, targetValue);
  
      if (currentValue >= targetValue) {
        clearInterval(interval);
      }
    }, 30);
  }
  currentSlide = 0;
autoSlideInterval: any;
totalSlides: number = 0;
cardAnimationClass: string[] = [];

processes = [
  { title: 'maintain',
     img:'/assets/images/about-us/maintain.png', 
    content: 'Content for Card 1' },
    { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
     { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
     { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
     { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
     { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
     { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
     { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
     { title: 'maintain',
      img:'/assets/images/about-us/maintain.png', 
     content: 'Content for Card 1' },
];

ngOnInit() {
  this.totalSlides = this.processes.length;
  // this.initializeAnimations();
  // this.startAutoSlide();
}

ngOnDestroy() {
  // this.stopAutoSlide();
}

// initializeAnimations() {
//   this.cardAnimationClass = new Array(this.totalSlides).fill('slide-in');
// }

// startAutoSlide() {
//   this.autoSlideInterval = setInterval(() => {
//     this.updateSlide();
//   }, 3000);
// }

// stopAutoSlide() {
//   if (this.autoSlideInterval) {
//     clearInterval(this.autoSlideInterval);
//   }
// }

updateSlide() {
  this.cardAnimationClass[this.currentSlide] = 'slide-out';
  this.currentSlide = (this.currentSlide + 1) % this.totalSlides;

  // setTimeout(() => {
  //   this.cardAnimationClass = this.cardAnimationClass.map((_, index) =>
  //     index === this.currentSlide ? 'slide-in' : 'slide-out'
  //   );
  // }, 500); // Delay to allow the slide-out to complete
}

goToSlide(index: number) {
  this.currentSlide = index;
  // this.initializeAnimations();
}

getDisplayedCards() {
  const cardCount = 3;
  const displayedCards = [];

  for (let i = 0; i < cardCount; i++) {
    const cardIndex = (this.currentSlide + i) % this.totalSlides;
    displayedCards.push({
      ...this.processes[cardIndex],
      animation: this.cardAnimationClass[cardIndex]
    });
  }

  return displayedCards;
}


}