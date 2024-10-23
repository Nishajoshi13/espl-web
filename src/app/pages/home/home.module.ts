import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';
import { WidgetCarouselComponent } from 'src/app/widget-carousel/widget-carousel.component';
import { IndustryWeServeComponent } from "../../industry-we-serve/industry-we-serve.component";
import { OurServicesComponent } from "../../our-services/our-services.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCardModule } from '@angular/material/card';

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
    VideoModalComponent,
    IndustryWeServeComponent,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule,
    CdkAccordionModule
    // OurServicesComponent
],
  declarations: [HomeComponent,WidgetCarouselComponent],
})
export class HomeModule {}
