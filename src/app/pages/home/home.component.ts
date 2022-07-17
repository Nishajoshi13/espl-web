import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  techIconsUrl = 'assets/images/tech-icons';
  developPlatforms = [
    {
      icon: 'desktop_mac',
      title: 'Web Development',
      desc: `Expertise in building highly scalable, secure and
       robust applications across several domains taht work for every user regardless of their browser`,
    },
    {
      icon: 'smartphone',
      title: 'Mobile Solutions',
      desc: `We have extensive expertise in building high performance native and hybrid mobile app development.`,
    },
    {
      img: 'assets/images/general/machine-learning.png',
      title: 'Machine Learning',
      desc: `Deep expertise in building highly scalable, secure and
      futuristic applications across a multitude of domains including
      but not limited to Finance, E-commerce, Logistics, Career and Jobs, Health, Social Networking, E-learning etc.`,
    },
  ];

  technologiesIcons = [
    { icon: `${this.techIconsUrl}/magento.svg`, title: 'Magento' },
    { icon: `${this.techIconsUrl}/php.svg`, title: 'Php' },
    { icon: `${this.techIconsUrl}/angular.svg`, title: 'Angular' },
    { icon: `${this.techIconsUrl}/react.svg`, title: 'React' },
    { icon: `${this.techIconsUrl}/nodejs.svg`, title: 'Nodejs' },
    { icon: `${this.techIconsUrl}/mongodb.svg`, title: 'MongoDb' },
    { icon: `${this.techIconsUrl}/sql-server.png`, title: 'SQL' },
    { icon: `${this.techIconsUrl}/docker.svg`, title: 'Docker' },
    { icon: `${this.techIconsUrl}/kubernetes.svg`, title: 'Kubernetes' },
  ];

  slides = [
    { image: '/assets/images/general/test1.jpg' },
    { image: '/assets/images/general/test2.jpg' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 500,
    autoplaySpeed: 200,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 4,
      },
      740: {
        items: 6,
      },
      940: {
        items: 8,
      },
    },
  };
  ngOnInit() {}
}
