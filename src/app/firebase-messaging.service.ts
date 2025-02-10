  import { Injectable } from '@angular/core';
  import { initializeApp, getApp, FirebaseApp } from 'firebase/app'; 
  import { AngularFireMessaging } from '@angular/fire/compat/messaging';
  import { getMessaging, getToken, onMessage } from 'firebase/messaging';
  import { environment } from 'src/environments/environment';
  import { DeviceTokenService } from './services/device-token.service';

  @Injectable({
    providedIn: 'root'
  })
  export class FirebaseMessagingService {

    constructor(private afMessaging: AngularFireMessaging , private deviceTokenService: DeviceTokenService)  { 
      if (!getApp()) {
        initializeApp(environment.firebaseConfig); // Initialize with your Firebase config
      }
      this.registerServiceWorker();
    }

      // Register the Firebase messaging service worker
      private registerServiceWorker() {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('firebase-messaging-sw.js')
            .then(registration => {
              console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(err => {
              console.error('Service Worker registration failed:', err);
            });
        }
      }

    // Request permission to display notifications
    requestPermission() {
      return Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
          this.registerWebPush();
          // Get the token if permission is granted
        } else {
          console.log('Notification permission denied');
        }
      });
    }

    // Register Web Push Notifications
    registerWebPush() {
      const messaging = getMessaging();
      getToken(messaging, { vapidKey: environment.firebaseConfig.vapidKey })
        .then((currentToken) => {
          if (currentToken) {
            localStorage.setItem('deviceToken', currentToken);
            this.saveDeviceToken();
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });

      // Listen for foreground messages
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
      });
    }

    // Save the device token (presumably to your backend)
    private saveDeviceToken() {
      const deviceToken = localStorage.getItem('deviceToken');
      if (deviceToken) {
        // Send this token to your backend for later use (e.g., to send notifications)
        console.log('Device token saved:', deviceToken);
      }
    }
    // private saveDeviceToken() {
    //   const deviceToken = localStorage.getItem('deviceToken');

    //   if (deviceToken) {
    //     // Assuming you have customer ID and platform available
    //     const customerId = 123; // Example customer ID
    //     const platform = 'web'; // You can dynamically get this if needed

    //     // Send the device token to your backend
    //     this.deviceTokenService.saveDeviceToken(customerId, deviceToken, platform).subscribe(
    //       response => {
    //         console.log('Device token saved successfully:', response.message);
    //       },
    //       error => {
    //         console.error('Error saving token:', error);
    //       }
    //     );
    //   } else {
    //     console.error('No device token found in localStorage.');
    //   }
    // }
  }



