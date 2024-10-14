import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { AboutUsComponent } from './about-us.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes),MatProgressBarModule],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {

}
