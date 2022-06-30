import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '@core/services/layout.service';
import { Subject, takeUntil } from 'rxjs';
import { MainSidebarItems } from '../../../const/mainSidebarItemsConst';
import { OtherSidebarItems } from '../../../const/otherSibarItemsConst';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import Menu from 'src/app/interface/menu';
import { LogOutOtherSidebarItems } from 'src/app/const/logoutOtherSidebarItems';
import { AuthService } from '../auth/auth.service';
import { LoginSignupModalComponent } from '../auth/login-signup-modal/login-signup-modal.component';
import { Customer } from 'src/app/interface/customer';
import { ModalService } from '@core/services/modal.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private loSvc: LayoutService,
    public dialog: MatDialog,
    private authSvc: AuthService,
    private modalSvc: ModalService
  ) {}
  @Input() drawerRef: MatDrawer;

  private destroy$: Subject<void> = new Subject<void>();
  customer?: Customer;
  sideBarState: Boolean = false;
  isExpanded: Boolean = false;
  isLoggedIn = false;
  customerFirstname: string;
  accountBalance: string;
  customerInitials: string;
  mainSidebarItems = MainSidebarItems;
  otherSidebarItems: Menu[];
  config = {
    width: '405px',
    autoFocus: false,
  };
  chatWidget = document.getElementById('chatlio-widget');
  showSubmenu: any = [];

  ngOnInit(): void {
    this.loSvc.sideBarState$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.sideBarState = res;
      this.isExpanded = this.sideBarState;
    });

    this.authSvc.customer$.pipe(takeUntil(this.destroy$)).subscribe((c) => {
      this.isLoggedIn = this.authSvc.isLoggedIn();
      if (!c) {
        return;
      }
      this.otherSidebarItems = this.isLoggedIn
        ? OtherSidebarItems
        : LogOutOtherSidebarItems;
      this.accountBalance = c.portfolioInfo.accountCreditFormatted;
    });
  }
  toggleMenu = () => {
    this.drawerRef.toggle();

    if (this.chatWidget) {
      this.chatWidget.hidden = false;
    }
    this.isExpanded = !this.isExpanded;
    this.loSvc.toggleSidebar(this.isExpanded);
  };

  openDialog() {
    this.dialog.open(PortfolioModalComponent, this.config);
  }
  openLoginModal() {
    this.dialog.open(LoginSignupModalComponent, this.config);
  }
  logout() {
    this.authSvc.logout();
  }
  openAccountCredit() {
    this.modalSvc.openAccountCreditModal();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
