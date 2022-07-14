import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmptyRouterComponent } from '@core/components/misc/empty-router.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';

const MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  FlexLayoutModule,
  MatExpansionModule,

  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatOptionModule,
  MatSortModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatRadioModule,
  MatChipsModule,
  MatToolbarModule,
];

const COMPONENTS: any[] = [
  EmptyRouterComponent,
  HeaderComponent,
  FooterComponent,
  SideDrawerComponent,
];

const DIRECTIVES: any[] = [];

const PIPES: any[] = [CurrencyPipe];

@NgModule({
  imports: [...MODULES],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES, ...MODULES],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    {
      provide: MatDialogRef,
      useValue: {},
    },
    ...PIPES,
  ],
})
export class SharedModule {}
