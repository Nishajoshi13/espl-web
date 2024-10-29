import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { AboutUsComponent } from './about-us.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes),MatProgressBarModule,
    MatTabsModule,],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {

}
