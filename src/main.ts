import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from 'firebase/app';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Initialize Firebase before bootstrapping the Angular app
initializeApp(environment.firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
