import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
