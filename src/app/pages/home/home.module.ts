import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';
import { WidgetCarouselComponent } from 'src/app/widget-carousel/widget-carousel.component';

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
    CarouselModule,
    MatTooltipModule,
    CdkAccordionModule,
    MatExpansionModule,
    VideoModalComponent,
    
  ],
  declarations: [HomeComponent,WidgetCarouselComponent],
})
export class HomeModule {}
