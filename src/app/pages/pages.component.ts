import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { throttleTime } from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {ContactUsFormComponent} from "@core/components/contact-us-form/contact-us-form.component";

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  @ViewChild('drawer', { static: true })
  drawer!: MatDrawer;
  website = true;
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog)  {
    setTimeout(() => {
        this.dialog.open(ContactUsFormComponent,{
          width: '60%',
          height: '80%',
          maxHeight: '100vh',
        })
      }
      , 5000
    )
  }

  ngOnInit() {
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
