import { Component, OnInit ,} from '@angular/core';
import { interval } from 'rxjs';
import { WidgetCarouselComponent } from 'src/app/widget-carousel/widget-carousel.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentIndex = 0;
  previousIndex = 0;
  interval:any;
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
 }

 }



  

