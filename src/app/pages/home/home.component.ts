import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate(['/portfolio'], { fragment: route });
  }

  techIconsUrl = 'assets/images/tech-icons';
  developPlatforms = [
    {
      img: 'assets/images/general/imac.svg',
      title: 'Web Development',
      desc: `We excel in scalable, secure, UI-rich web applications for all browsers.`,
    },
    {
      img: 'assets/images/general/mobile.svg',
      title: 'Mobile Solutions',
      desc: `We specialize in crafting high-performance native and hybrid mobile apps.`,
    },
    {
      img: 'assets/images/general/devops-icon.png',
      title: 'DevOps',
      desc: `Our DevOps team enable effortless collaboration, deployment, and efficiency.`,
    },
    {
      img: 'assets/images/general/machine-learning.png',
      title: 'Machine Learning',
      desc: `We automate your business to solve real-time growth constraints.`,
    },
  ];

  backendIcons = [
    { icon: `${this.techIconsUrl}/magento.svg`, title: 'Magento', tag: '' },
    { icon: `${this.techIconsUrl}/php.svg`, title: 'Php', tag: '' },
    { icon: `${this.techIconsUrl}/nodejs.svg`, title: 'Nodejs', tag: '' },
    { icon: `${this.techIconsUrl}/Golang.svg`, title: 'Golang', tag: '' },
    {
      icon: `${this.techIconsUrl}/wordpress.svg`,
      title: 'Wordpress',
      tag: 'wordpress',
    },
    { icon: `${this.techIconsUrl}/shopify.svg`, title: 'Shopify', tag: '' },
  ];
  frontendIcons = [
    {
      icon: `${this.techIconsUrl}/angular.svg`,
      title: 'Angular',
      tag: 'angular',
    },
    { icon: `${this.techIconsUrl}/react.svg`, title: 'React', tag: '' },
    { icon: `${this.techIconsUrl}/jquery.svg`, title: 'Jquery', tag: '' },
    { icon: `${this.techIconsUrl}/html.svg`, title: 'Html', tag: '' },
    { icon: `${this.techIconsUrl}/css2.svg`, title: 'CSS', tag: '' },
    { icon: `${this.techIconsUrl}/sass.svg`, title: 'Scss', tag: '' },
  ];
  devopsIcons = [
    { icon: `${this.techIconsUrl}/docker.svg`, title: 'Docker', tag: '' },
    {
      icon: `${this.techIconsUrl}/kubernetes.svg`,
      title: 'Kubernetes',
      tag: '',
    },
  ];
  databaseIcons = [
    { icon: `${this.techIconsUrl}/mongodb.svg`, title: 'MongoDb', tag: '' },
    { icon: `${this.techIconsUrl}/sql-server.png`, title: 'SQL', tag: '' },
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
