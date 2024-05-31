import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { BlogsComponent } from './blogs.component';
import {MatRipple, MatRippleModule} from "@angular/material/core";

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), MatRippleModule],
  declarations: [BlogsComponent],
})
export class BlogsModule {}

interface Subpart {
  subhead: string;
  description: string[];
}

export class BlogInfo {
  public title: string;
  public img: string;
  public author: string;
  public subparts: Subpart[];

  public constructor(title: string, img: string, author: string, subparts: Subpart[]) {
    this.title = title;
    this.img = img;
    this.author = author;
    this.subparts = subparts;
  }

}
