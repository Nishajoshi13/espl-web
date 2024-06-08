import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './circle-detector.component.html',
  styleUrl: './circle-detector.component.scss'
})
export class CircleDetectorComponent {

  files: any[] = [];

  onSelect(event: any) {
    this.files = [];  // Clear the array to ensure only one file is selected
    const file = event.addedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.files.push({ preview: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }












  originalImageUrl: string | ArrayBuffer | null = null;
  processedImageUrl: string | ArrayBuffer | null = null;
  circleCount: number | null = null;
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        this.originalImageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
  obj:any;
  imageUrl: string = '';
  count:number = 0;
  makereq(){
    this.obj = this.http.get('http://localhost:9000/').subscribe(
      data => {
        console.log('data');
        this.obj = data
      },
    )
  }
  detectCircles(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.http.get(`http://127.0.0.1:8000/api/images/6/detect_circles/`).subscribe(
        (detectResponse: any) => {
          this.processedImageUrl = detectResponse.processed_image;
          console.log(this.processedImageUrl);
          this.circleCount = detectResponse.circles_detected;
        },
        (error) => {
          console.error('Error detecting circles:', error);
        }
      );
      // First, send the image and get the image ID in the response
      // this.http.post('http://127.0.0.1:8000/api/images/', formData).subscribe(
      //   (response: any) => {
      //     const imageId = response.id; // Assume the response contains the image ID
      //     // Now request the circle detection API with the image ID
      //     console.log(response.id)
      //
      //   },
      //   (error) => {
      //     console.error('Error uploading image:', error);
      //   }
      // );
    }
  }


}
