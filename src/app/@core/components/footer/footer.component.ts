import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navItems = [
    { title: 'Home', url: 'home' },
    { title: 'Services', url: 'services' },
    { title: 'Team', url: 'team' },
    { title: 'About', url: 'about' },
    { title: 'Contact', url: 'contact-us' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
