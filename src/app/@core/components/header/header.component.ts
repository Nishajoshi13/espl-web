import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

export const navItems = [
  { title: 'Home', url: '' },
  { title: 'Services', url: 'services' },
  { title: 'Team', url: 'team' },
  { title: 'About', url: 'about-us' },
  { title: 'Contact', url: 'contact-us' },
];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems = navItems;
  @Input() drawerRef: MatDrawer | undefined;
  constructor() {}

  ngOnInit(): void {}
  openSideDrawer() {
    this.drawerRef?.open();
  }
}
