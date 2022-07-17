import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { MatCarouselModule } from 'ng-mat-carousel';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatCarouselModule.forRoot(),
    CarouselModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
