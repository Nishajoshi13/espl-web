import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
