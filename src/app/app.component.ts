import { Component } from '@angular/core';
import { FirebaseMessagingService } from './firebase-messaging.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'espl-website';
  constructor(private firebaseMessagingService: FirebaseMessagingService) {}

  ngOnInit(): void {
    // Request notification permission when the app loads
    this.firebaseMessagingService.requestPermission();

    // Start listening for foreground notifications
    this.firebaseMessagingService. registerWebPush();
  }
}
