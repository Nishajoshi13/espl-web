import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { TextToSpeechComponent } from './text-to-speech.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

const routes: Routes = [
    {
      path: '',
      component: TextToSpeechComponent,
    },
  ];
  @NgModule({
      imports: [SharedModule, RouterModule.forChild(routes), HttpClientModule, FormsModule, MatSlideToggleModule, MatButtonToggleModule],
    declarations: [TextToSpeechComponent],
  })
  export class TextToSpeechModule {}
