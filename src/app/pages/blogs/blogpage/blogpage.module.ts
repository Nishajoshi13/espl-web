import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { BlogpageComponent } from './blogpage.component';

const routes: Routes = [
  {
    path: '',
    component: BlogpageComponent,
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [BlogpageComponent],
})
export class BlogpageModule {}
