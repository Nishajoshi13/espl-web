import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { VisualAlgoComponent} from "./visual-algo.component";
import {HeaderComponent} from "./header/header.component";
import {ConvexHullFooterComponent} from "./convex-hull-footer/convex-hull-footer.component";
import {ConvexHullComponent} from "./convex-hull/convex-hull.component";

const routes: Routes = [
  {
    path: '',
    component: VisualAlgoComponent,
  },
];
@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes), HeaderComponent, ConvexHullFooterComponent, ConvexHullComponent],
  declarations: [VisualAlgoComponent],
})
export class VisualAlgoModule {}
