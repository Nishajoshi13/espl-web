import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { AboutUsComponent } from './about-us.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutUsRoutingModule } from './about-us-routing.module';


const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatProgressBarModule,
    MatTabsModule,
    AboutUsRoutingModule
   
  ],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {
  constructor() {
    console.log('AboutUsModule loaded!');
  }
}
