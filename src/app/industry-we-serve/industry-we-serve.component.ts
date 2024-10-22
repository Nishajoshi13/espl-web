import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router'; // Import the Router
@Component({
  selector: 'app-industry-we-serve',
  standalone: true,
  imports: [CommonModule,MatGridListModule, ],
  templateUrl: './industry-we-serve.component.html',
  styleUrl: './industry-we-serve.component.scss'
})
export class IndustryWeServeComponent {
  constructor(private router: Router) {}
  items = [
    { image: '/assets/icon/icon 1/icon/industries icon/cab.svg', description: 'Cab' },
    { image: '/assets/icon/icon 1/icon/industries icon/cafe 2.svg', description: 'Cafe' },
    { image: '/assets/icon/industries we Serve/industries we Serve/ecommerce.svg', description: 'E-commerce' },
    { image: '/assets/icon/icon 1/icon/industries icon/finance.svg', description: 'Finance' },
    { image: '/assets/icon/industries we Serve/industries we Serve/health care.svg', description: 'Hospital' },
    { image: '/assets/icon/icon 1/icon/industries icon/hotel management.svg', description: 'Hotel-Management' },
    { image: '/assets/icon/industries we Serve/industries we Serve/realestate.svg', description: 'Real<br>Estate' },
    { image: '/assets/icon/icon 1/icon/industries icon/tour.svg', description: 'Tour-Travels' },
    { image: '/assets/icon/industries we Serve/industries we Serve/winetrading.svg', description: 'Wine-Trading' },
    { image: '/assets/icon/industries we Serve/industries we Serve/e-learning.svg', description: 'E-learning' },

  ];
  navigateToContact() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact-us');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

}
