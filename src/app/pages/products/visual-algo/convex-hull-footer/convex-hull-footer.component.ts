import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {SharedModule} from "@core/shared.module";

@Component({
  selector: "app-convex-hull-footer",
  templateUrl: "./convex-hull-footer.component.html",
  standalone: true,
  imports: [
    SharedModule
  ],
  styleUrls: ["./convex-hull-footer.component.css"]
})
export class ConvexHullFooterComponent implements OnInit {
  @Output() dataSetAdd = new EventEmitter<number>();
  @Output() dataSetRemove = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  addDatasets(event: Event) {
    this.dataSetAdd.emit(5);
  }

  removeDatasets(event: Event) {
    this.dataSetRemove.emit(5);
  }
}
