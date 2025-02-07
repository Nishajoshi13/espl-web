// Import Firebase SDKs
// importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging.js');
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");



// Initialize Firebase with your project configuration
firebase.initializeApp({
        apiKey: "AIzaSyAIdoanfbMKUNyVye-Br6lMuaAKKMZ4iLY",
        authDomain: "espl-website-3b854.firebaseapp.com",
        databaseURL: "https://espl-website-3b854-default-rtdb.firebaseio.com",
        projectId: "espl-website-3b854",
        storageBucket: "espl-website-3b854.appspot.com",
        messagingSenderId: "539993972584",
        appId: "1:539993972584:web:9ac2170c8d9106528580dd",
        measurementId: "G-HXTJCFDX8K",
});

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background push notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // You can customize the notification icon here
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

