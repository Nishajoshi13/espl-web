import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import {
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  pairwise,
  share,
  Subject,
  takeUntil,
  throttleTime,
} from 'rxjs';

import Store from 'src/app/interface/store';
import { stores } from '../../../const/storeConst';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LayoutService } from '@core/services/layout.service';
import { AuthService } from '../auth/auth.service';
import { StoreService } from '@core/services/store.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interface/customer';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private destroy$: Subject<void> = new Subject<void>();

  customer?: Customer;
  selectedStore: Store;
  stores: Store[] = stores;
  sideBarState: boolean = false;
  isLoggedIn: boolean = false;
  stickyHeader: boolean = false;
  hideTopHeader: boolean = false;
  hideElement = true;
  accountCreditBalance: string;
  portfolioCost: string;
  profitLoss: string;
  profitLossPercent: string;
  totalPortfolio: string;
  shortName: string;
  userInitials: string;
  notificationCount: number;
  chatWidget = document.getElementById('chatlio-widget');
  @Input() drawerRef: MatDrawer;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
    private loSvc: LayoutService,
    private authSvc: AuthService,
    private storeSvc: StoreService,
    private router: Router
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'notification',
        this.domSanitzer.bypassSecurityTrustResourceUrl(
          'assets/images/account/notification.svg'
        )
      )
      .addSvgIcon(
        'account',
        this.domSanitzer.bypassSecurityTrustResourceUrl(
          '/assets/images/account/account.svg'
        )
      );
  }

  ngOnInit(): void {
    const store = stores.find((s) => this.storeSvc.storeCode === s.code);
    this.selectedStore = store ?? stores[0];

    this.authSvc.customer$.pipe(takeUntil(this.destroy$)).subscribe((c) => {
      this.isLoggedIn = this.authSvc.isLoggedIn();
      if (!c) {
        return;
      }
      this.customer = c;
      const portfolioInfo = c.portfolioInfo;
      this.accountCreditBalance = portfolioInfo.accountCreditFormatted;
      this.portfolioCost = portfolioInfo.portfolioCostFormatted;
      this.profitLoss = portfolioInfo.profitLossFormatted;
      this.profitLossPercent = portfolioInfo.profitLossPercent;
      if (Number(this.profitLossPercent) > 0) {
        this.profitLossPercent = '+' + this.profitLossPercent;
      }
      this.totalPortfolio = portfolioInfo.totalPortfolioFormatted;
      this.shortName = c.shortName;
      this.userInitials = c.firstname?.charAt(0) + c.lastname?.charAt(0);
      if (c.bellIconCount > 0) this.notificationCount = c.bellIconCount;
    });
  }
  ngAfterViewInit() {
    enum Direction {
      Up = 'Up',
      Down = 'Down',
      None = 'None',
    }
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => {
        let direction = Direction.None;
        if (window.pageYOffset > 10) {
          direction = y2 < y1 ? Direction.Up : Direction.Down;
        }
        return direction;
      }),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter((direction) => direction === Direction.Up)
    );
    const scrollDown = scroll$.pipe(
      filter((direction) => direction === Direction.Down)
    );
    const scrollNone$ = scroll$.pipe(
      filter((direction) => direction === Direction.None)
    );
    scrollUp$.subscribe(() => {
      this.stickyHeader = true;
      this.hideTopHeader = false;
    });
    scrollDown.subscribe(() => {
      this.stickyHeader = true;
      this.hideTopHeader = true;
    });
    scrollNone$.subscribe(() => {
      this.stickyHeader = false;
    });
  }
  toggleMenu() {
    this.drawerRef.open();

    if (this.chatWidget) {
      this.chatWidget.hidden = true;
    }
    this.loSvc.toggleSidebar(true);
  }

  onChangeStore() {
    this.storeSvc.setStoreCode(this.selectedStore?.code);
    const url = this.router.url.replace(
      this.router.url.substring(1, 3),
      this.selectedStore.code
    );
    document.location = url;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
