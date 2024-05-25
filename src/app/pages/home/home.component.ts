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
      desc: `We excel in scalable, secure, UI-rich web apps for all browsers.`,
    },
    {
      icon: 'smartphone',
      title: 'Mobile Solutions',
      desc: `We specialize in crafting high-performance native and hybrid mobile apps.`,
    },
    {
      img: 'assets/images/general/devops-icon.png',
      title: 'DevOps',
      desc: `Our DevOps team enable effortless collaboration, deployment, security, scalability, and efficiency.`,
    },
    {
      img: 'assets/images/general/machine-learning.png',
      title: 'Machine Learning',
      desc: `Solve real time problems that once contrained the growth. Introduce automation in your business.`,
    },
  ];

  backendIcons = [
    { icon: `${this.techIconsUrl}/magento.svg`, title: 'Magento', link:'https://business.adobe.com/products/magento/magento-commerce.html'},
    { icon: `${this.techIconsUrl}/php.svg`, title: 'Php' , link:'https://www.php.net/'},
    { icon: `${this.techIconsUrl}/nodejs.svg`, title: 'Nodejs' , link:'https://nodejs.org/en'},
    { icon: `${this.techIconsUrl}/Golang.svg`, title: 'Golang' , link:'https://go.dev/'},
    { icon: `${this.techIconsUrl}/wordpress.svg`, title: 'Wordpress' , link:'https://wordpress.com/'},
    { icon: `${this.techIconsUrl}/shopify.svg`, title: 'Shopify' , link:'https://www.shopify.com/in'},

  ]
  frontendIcons = [
    { icon: `${this.techIconsUrl}/angular.svg`, title: 'Angular', link:'https://angular.dev/' },
    { icon: `${this.techIconsUrl}/react.svg`, title: 'React' , link:'https://react.dev/'},
    { icon: `${this.techIconsUrl}/jquery.svg`, title: 'Jquery' , link:'https://jquery.com//'},
    { icon: `${this.techIconsUrl}/html.svg`, title: 'Html', link:'' },
    { icon: `${this.techIconsUrl}/css2.svg`, title: 'CSS' , link:''},
    { icon: `${this.techIconsUrl}/sass.svg`, title: 'Scss' , link:'https://sass-lang.com/'},
  ]
  devopsIcons = [
    { icon: `${this.techIconsUrl}/docker.svg`, title: 'Docker' , link:'https://www.docker.com/'},
    { icon: `${this.techIconsUrl}/kubernetes.svg`, title: 'Kubernetes' , link:'https://kubernetes.io/'},
  ]
  databaseIcons = [
    { icon: `${this.techIconsUrl}/mongodb.svg`, title: 'MongoDb' , link:'https://www.mongodb.com/'},
    { icon: `${this.techIconsUrl}/sql-server.png`, title: 'SQL' , link:'https://www.mysql.com/'},
  ]

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
