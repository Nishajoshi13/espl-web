import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { throttleTime } from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {ContactBoxComponent} from "./contact-box/contact-box.component";

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})

export class PagesComponent implements OnInit {
  @ViewChild('drawer', { static: true })
  drawer!: MatDrawer;
  website = true;
  maxDialogOpens = 3;
  matDialogKey = 'dialogOpensCount';

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog)  {}

  getDialogCount(): number {
    const count = sessionStorage.getItem(this.matDialogKey);
    return count ? parseInt(count, 10) : 0;
  }

  incrementDialogCount(): void {
    const count = this.getDialogCount() + 1;
    sessionStorage.setItem(this.matDialogKey, count.toString());
  }

  canOpenDialog(): boolean {
    return this.getDialogCount() < this.maxDialogOpens;
  }
  openDialog(): void {
      const dialogRef = this.dialog.open(ContactBoxComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.incrementDialogCount();
      });

  }
  startTimer(){
    setTimeout(() => {
      this.openDialog();
    }, 20000);
  }

  ngOnInit() {
    if (this.canOpenDialog()) {
      this.startTimer()
    }

    this.breakpointObserver
      .observe(['(max-width: 770px)'])
      .pipe(throttleTime(10))
      .subscribe((state: BreakpointState) => {
        this.website = !state.matches;
      });
  }
  close() {
    this.drawer.close();
  }
}
