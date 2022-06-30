import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  // public menuToggle$: Subject<'open' | 'close' | 'toggle'> = new Subject<
  //   'open' | 'close' | 'toggle'
  // >();

  private getIsExpanded = JSON.parse(
    localStorage.getItem('isExpanded') || 'true'
  );
  public sideBarState$ = new BehaviorSubject<Boolean>(this.getIsExpanded);
  public loader$ = new Subject<boolean>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 1290px)'])
      .pipe(throttleTime(10))
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sideBarState$.next(false);
        } else {
          this.sideBarState$.next(this.getIsExpanded);
        }
      });
  }

  toggleSidebar = (isExpanded: Boolean) => {
    this.sideBarState$.next(isExpanded);
    localStorage.setItem('isExpanded', JSON.stringify(isExpanded));
    this.getIsExpanded = isExpanded;
  };
}
