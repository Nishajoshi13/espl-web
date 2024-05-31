import { Injectable } from '@angular/core';
import { BlogsComponent} from "../blogs/blogs.component";
import {BlogInfo} from "../blogs/blogs.module";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message = ''
  constructor() { }
  setMessage(message:string) {
    this.message = message;
  }
  getMessage(){
    return this.message;
  }
}
