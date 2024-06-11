import {Component, HostListener} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-circle-detector',
  templateUrl: './circle-detector.component.html',
  styleUrls: ['./circle-detector.component.scss']
})

export class CircleDetectorComponent {
  circleCount:any;
  imageSrc: string | ArrayBuffer | null = null;
  processedImageSrc: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  DetectionOn:boolean = false;
  private uploadUrl = 'http://127.0.0.1:8000/api/images/';

  constructor(private http: HttpClient) {}

  onSelect(event: NgxDropzoneChangeEvent): void {
    if (event.addedFiles.length > 0) {
      this.DetectionOn = true;
      this.selectedFile = event.addedFiles[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onReset(): void {
    this.imageSrc = null;
    this.processedImageSrc = null;
    this.circleCount = 0;
    this.selectedFile = null;
    this.deleteImage(this.ObjectId).subscribe(data => {});
    this.DetectionOn = false;
  }

  ObjectId:any;

  onDetect(): void {
    if (this.selectedFile) {
      this.uploadImage(this.selectedFile).subscribe(response => {
        this.ObjectId = response.id;
        this.getProcessedImage(this.ObjectId).subscribe(data => {
          this.circleCount = data.circles | 0
          this.processedImageSrc = data.image;
        });
      });
    }
    this.DetectionOn = false
  }

  private uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(this.uploadUrl, formData);
  }
  getImageUrl = ''
  private getProcessedImage(id: string) {
    this.getImageUrl = `${this.uploadUrl}${this.ObjectId}/detect_circles/`;
    return this.http.get<any>(this.getImageUrl, {
      withCredentials: true,
    });
  }

  private deleteImage(id: string) {
     return this.http.delete<any>(`${this.uploadUrl}${this.ObjectId}/`);
  }

  ngOnInit() {
    window.addEventListener('beforeunload', this.onBeforeUnload.bind(this));
  }

  ngOnDestroy() {
    this.deleteImage(this.ObjectId).subscribe(()=>{});
    window.removeEventListener('beforeunload', this.onBeforeUnload.bind(this));
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    this.deleteImage(this.ObjectId).subscribe(()=>{});
  }

}
