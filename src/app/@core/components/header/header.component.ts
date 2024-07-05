import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';

export const navItems = [
  { title: 'Home', url: '' },
  { title: 'Portfolio', url: 'products' },
  { title: 'Blogs', url: 'blogs' },
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
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }
    });

  }
  openSideDrawer() {
    this.drawerRef?.open();
  }
}
