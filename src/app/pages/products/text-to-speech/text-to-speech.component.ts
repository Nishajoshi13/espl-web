import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss'],
})
export class TextToSpeechComponent implements OnInit {
  API = 'http://127.0.0.1:8000/api/';
  voice = 'Male';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  generateAudio(formValues: any) {
    this.http
      .post(this.API, formValues, { observe: 'response', responseType: 'blob' })
      .subscribe((response) => {
        let fileName = 'audio';
        let blob: Blob = response.body as Blob;

        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      });
  }
}
