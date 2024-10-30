import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  QueryList,
  ViewChildren,
  OnDestroy,
} from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
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
  @ViewChildren('progressBarContainer')
  progressBarContainers!: QueryList<ElementRef>;
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
          const index = parseInt(
            progressBarElement.getAttribute('data-index')!,
            10
          );
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
    {
      title: '1.Requirement Analysis',
      img: '/assets/images/about-us/requirement-analysis.png',
      content:
        'At the heart of successful software development is a thorough understanding of your needs. Our Requirement Analysis process captures every detail to ensure a seamless alignment between your vision and the end product.',
    },
    {
      title: '2.Creative UI/UX Design',
      img: '/assets/images/about-us/UI-UX.png',
      content: 'We believe design goes beyond aesthetics—its about creating intuitive, user-centric experiences. Our UI/UX team crafts creative and visually compelling interfaces that enhance usability and deliver a seamless interaction for your users. We transform complex functionalities into enjoyable, easy-to-navigate experiences.',
    },
    {
      title: '3.Prototyping Excellenece',
      img: '/assets/images/about-us/prptotype.png',
      content:
        'Bring your ideas to life through our interactive prototypes. By visualizing the core aspects of your project early, we refine functionality and user flows collaboratively, ensuring the final product is aligned with your goals. Our prototyping expertise provides you with a clear preview of what to expect.',
    },
    {
      title: '4.Agile Development',
      img: '/assets/images/about-us/agile.png',
      content:
        'Our Agile Development approach allows us to adapt to changes and continuously improve your project through iterative progress. We deliver functional components in cycles, keeping you engaged and informed as your product takes shape. This flexibility enhances responsiveness and accelerates time-to-market.',
    },
    {
      title: '5.Quality Assurance',
      img: '/assets/images/about-us/qa.png',
      content:
        'Quality is at the forefront of everything we do. Our Quality Assurance team performs rigorous testing to catch and resolve issues before they reach end-users. With comprehensive test plans and advanced methodologies, we ensure your software is reliable, secure, and performs optimally across all environments.',
    },
    {
      title: '6.Ongoing Support',
      img: '/assets/images/about-us/support.png',
      content:
        'Our dedicated support team is here to help you at every stage of your software’s lifecycle. Whether it’s troubleshooting, upgrading, or enhancing functionalities, we offer reliable, round-the-clock assistance to keep your operations running smoothly and your users satisfied.',
    },
    {
      title: '7.Maintenance',
      img: '/assets/images/about-us/maintain.png',
      content:
        'Our commitment goes beyond project delivery. We provide continuous maintenance to keep your software optimized, secure, and updated with the latest advancements. Our team promptly addresses any issues, conducts regular updates, and ensures your system’s performance remains consistently high over time.',
    },
    {
      title: '8.Seamless Development',
      img: '/assets/images/about-us/seamless.png',
      content:
        'Experience end-to-end development that is smooth, cohesive, and aligned with your vision. From ideation to deployment, our team coordinates every stage seamlessly, ensuring that the transition between design, development, and deployment is effortless and effective.',
    },
  ];

  ngOnInit() {
    this.currentSlide = 0;
    this.totalSlides = this.processes.length;
    this.initializeAnimations();
    this.showFirstThreeCards();
    this.startAutoSlide();
  }

  initializeAnimations() {
    this.cardAnimationClass = new Array(this.totalSlides).fill('slide-in');
  }

  showFirstThreeCards() {
    // Immediately display the first three cards with 'slide-in' animation
    for (let i = 0; i < 3; i++) {
      this.cardAnimationClass[i] = 'slide-in';
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.updateSlide();
    }, 6000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  updateSlide() {
    // Slide out the first card
    this.cardAnimationClass[this.currentSlide] = 'slide-out';
  
    // Move to the next card, wrapping around
    const previousSlide = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  
    // Set the next card to slide in
    this.cardAnimationClass[this.currentSlide] = 'slide-in';
  
    // Update the classes for the cards that need to remain visible
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.cardAnimationClass[nextIndex] = 'slide-in';
  
    // Delay to allow the slide-out to complete
    setTimeout(() => {
      // Reset the animation class for the previous slide after sliding out
      this.cardAnimationClass[previousSlide] = 'slide-in';
    }, 500); // Delay to allow the slide-out to complete
  }
  

  goToSlide(index: number) {
    this.stopAutoSlide(); // Optional: Stop auto sliding when manually changing slides
    this.currentSlide = index;
    this.initializeAnimations();
  }

  getDisplayedCards() {
    const cardCount = 3;
    const displayedCards = [];

    for (let i = 0; i < cardCount; i++) {
      const cardIndex = (this.currentSlide + i) % this.totalSlides;
      displayedCards.push({
        ...this.processes[cardIndex],
        animation: this.cardAnimationClass[cardIndex],
      });
    }

    return displayedCards;
  }
}