import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { SharedModule } from '@core/shared.module';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        pathMatch: 'full',
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./our-services/our-services.module').then(
            (m) => m.OurServiceModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'blogs',
        loadChildren: () =>
          import('./blogs/blogs.module').then((m) => m.BlogsModule),
        pathMatch: 'full',
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
        pathMatch: 'full',
      },
      {
        path: 'blogs/:id',
        loadChildren: () =>
          import('./blogs/blogpage/blogpage.module').then(
            (m) => m.BlogpageModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'blogpage',
        loadChildren: () =>
          import('./blogs/blogpage/blogpage.module').then(
            (m) => m.BlogpageModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'portfolio/text-to-speech',
        loadChildren: () =>
          import('./products/text-to-speech/text-to-speech.module').then(
            (m) => m.TextToSpeechModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule),
        pathMatch: 'full',
      },
      {
        path: 'team',
        loadChildren: () =>
          import('./team/team.module').then((m) => m.TeamModule),
        pathMatch: 'full',
      },
      {
        path: 'portfolio/circle-detector',
        loadChildren: () =>
          import('./products/circle-detector/circle-detector.module').then(
            (m) => m.CircleDetectorModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'portfolio/visual-algo',
        loadChildren: () =>
          import('./products/visual-algo/visual-algo.module').then(
            (m) => m.VisualAlgoModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'portfolio/testo',
        loadChildren: () =>
          import('./products/testo/testo.module').then((m) => m.TestoModule),
        pathMatch: 'full',
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [PagesComponent],
})
export class PagesModule {}
