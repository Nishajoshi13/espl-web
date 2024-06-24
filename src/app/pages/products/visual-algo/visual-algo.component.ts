import {Component, ViewChild} from '@angular/core';
import { HeaderComponent} from "./header/header.component";
import {ConvexHullComponent} from "./convex-hull/convex-hull.component";

@Component({
  selector: 'app-visual-algo',
  templateUrl: './visual-algo.component.html',
  styleUrl: './visual-algo.component.scss'
})

export class VisualAlgoComponent {
  title = "visualalgo";

  @ViewChild(ConvexHullComponent, { static: true }) child: ConvexHullComponent | undefined ;

  informCVAdd(event:any) {
    // @ts-ignore
    this.child.addDataSet(5);
  }

  informCVRemove(event:any) {
    // @ts-ignore
    this.child.removeDatasets(5);
  }
}
