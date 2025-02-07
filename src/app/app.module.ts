import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoModalComponent } from './video-modal/video-modal.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire/compat'; // Import compatibility module
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';


@NgModule({
  declarations: [AppComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VideoModalComponent,
    MatDialogModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase
    AngularFireDatabaseModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
  
}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
