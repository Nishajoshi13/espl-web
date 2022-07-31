import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { OurServicesComponent } from './our-services.component';

const routes: Routes = [
  {
    path: '',
    component: OurServicesComponent,
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [OurServicesComponent],
})
export class OurServiceModule {}
