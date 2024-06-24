import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxDropzoneChangeEvent, NgxDropzoneModule} from "ngx-dropzone";

@Component({
  templateUrl: './testo.component.html',
  styleUrl: './testo.component.scss'
})
export class TestoComponent {
  imageSrc: string | ArrayBuffer | null = null;
  processedImageSrc: string | ArrayBuffer | null = null;
  testshow = false;
  onSelect(event: NgxDropzoneChangeEvent): void {
    if (event.addedFiles.length > 0) {
      const file = event.addedFiles[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        // @ts-ignore
        this.imageSrc = e.target?.result;
      };

      reader.readAsDataURL(file);
    }
    this.processedImageSrc = this.imageSrc
  }

  onReset(): void {
    this.imageSrc = null;
    this.processedImageSrc = null
    this.testshow = false;
  }

  onDetect(){
    this.testshow = true
  }

}
