import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { TestoComponent} from "./testo.component";
import {NgxDropzoneModule} from "ngx-dropzone";

const routes: Routes = [
  {
    path: '',
    component: TestoComponent,
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), HttpClientModule, FormsModule, MatSlideToggleModule, MatButtonToggleModule, NgxDropzoneModule],
  declarations: [TestoComponent],
})
export class TestoModule {}
