import { Component, OnInit ,} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentIndex = 0;
  // translateX = 0;
  previousIndex = 0;
  interval:any;
  items= [
   { image:'/assets/images/tech-icons/angular2.png',alt: 'Image 1'},
    {image:'/assets/images/tech-icons/sql-server.png',alt: 'Image 2'},
    {image:'/assets/images/tech-icons/text.webp',alt: 'Image 3'},
    {image:'/assets/images/tech-icons/wordpress.png',alt: 'Image 4'},
    {image:'/assets/images/tech-icons/sql-server.png',alt: 'Image 5'},
    {image:'/assets/images/tech-icons/text.webp',alt: 'Image 6'},
    {image:'/assets/images/tech-icons/angular2.png',alt: 'Image 7'},
    {image:'/assets/images/tech-icons/wordpress.png',alt: 'Image 8'},
  ];
  navItems = [
    {
      title: 'Services',
      url: 'services',
      subPoints: [
        { title: 'Frontend Development', url: 'services' },
        { title: 'Backend Development', url: 'services' },
        { title: 'Mobile Apps Development', url: 'services' },
        { title: 'DevOps', url: 'services' },
        { title: 'QA Testing', url: 'services' },
      ],
    },
    {
      title: 'Company',
      url: '',
      subPoints: [
        { title: 'About', url: 'about-us' },
        { title: 'Team', url: 'team' },
      ],
    },
    {
      title: 'Contact',
      url: 'contact-us',
      subPoints: [
        { title: '+91-9470039388', url: 'tel:+9470039388' },
        { title: 'info@entanglesoftware.com', url: 'mailto:info@entanglesoftware.com' },
      ],
    },
  ];

  socialPlatforms = [
    {
      link: 'https://twitter.com/espl_software',
      icon: 'assets/images/general/twitter.svg',
    },
    {
      link: 'https://linkedin.com/company/entangle-software',
      icon: 'assets/images/general/linkedin.svg',
    },
    {
      link: 'https://www.instagram.com/entanglesoftware',
      icon: 'assets/images/general/instagram.svg',
    },
    {
      link: 'https://github.com/entanglesoftware-angular',
      icon: 'assets/images/general/github.svg',
    },
  ];
  constructor() {}
 
  
  ngOnInit(): void {
    this.startCarousel();
 }
//  startCarousel() {
  // this.interval=setInterval(() => {
  //   this.currentIndex = (this.currentIndex + 1) % this.items.length;
  //   this.translateX = -this.currentIndex * 100; // Move the carousel
  // }, 300); // Change slide every 3 seconds
//  }

// startCarousel() {
//   this.interval = setInterval(() => {
//     this.currentIndex = (this.currentIndex + 1) % this.items.length;
//   }, 3000); // Change every 3 seconds
// }

startCarousel() {
  this.interval = setInterval(() => {
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }, 3000); // Change every 3 seconds
}
 }



  

