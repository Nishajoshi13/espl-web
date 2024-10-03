import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'], // Corrected to `styleUrls` instead of `styleUrl`
})
export class VideoModalComponent {
  videoUrl: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { videoUrl: string },
    private sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<VideoModalComponent>
  ) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.videoUrl);
  }

  close() {
    this.dialogRef.close(); // Corrected to `this.dialogRef.close()`
  }
}
