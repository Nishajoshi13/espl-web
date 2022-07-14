import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navItems = [
    { title: 'Services', url: 'services' },
    { title: 'About', url: 'about' },
    { title: 'Contact', url: 'contact-us' },
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
