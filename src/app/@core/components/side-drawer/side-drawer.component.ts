import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { navItems } from '../header/header.component';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
})
export class SideDrawerComponent implements OnInit {
  navItems = navItems;
  @Input() drawerRef: MatDrawer | undefined;

  constructor(public dialog: MatDialog) {}

  async ngOnInit() {}

  toggleMenu = () => {
    this.drawerRef?.toggle();
  };
}
