import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; 
@Component({
  selector: 'app-industry-we-serve',
  standalone: true,
  imports: [CommonModule,MatGridListModule, MatCardModule],
  templateUrl: './industry-we-serve.component.html',
  styleUrl: './industry-we-serve.component.scss'
})
export class IndustryWeServeComponent {
  constructor(private router: Router) {}
  navigateToContact() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact-us');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
 industryWeServe=[
  this.createIndustryWeServe(
    '/assets/icon/industries-we-Serve/health care.svg',
     'Healthcare'
  ),
  this.createIndustryWeServe(
    '/assets/icon/industries-we-Serve/winetrading.svg',
     'WineTrading Solutions'
  ),
  this.createIndustryWeServe(
    '/assets/icon/industries-we-Serve/e-learning.svg',
     'E-learning'
  ),
  this.createIndustryWeServe(
    '/assets/icon/industries-we-Serve/fintech.svg',
     'Fintech'
  ),
  this.createIndustryWeServe(
     '/assets/icon/industries-we-Serve/fintech.svg',
     'Real Estate'
  ),
  this.createIndustryWeServe(
    '/assets/icon/industries-we-Serve/ecommerce.svg',
     'E-commerce'
  ),
  this.createIndustryWeServe(
    '/assets/icon/industries-we-Serve/manufacturing.svg',
     'Manufacture'
  ),
  this.createIndustryWeServe(
    '/assets/icon/industries-we-Serve/construction.svg',
     'Construction'
  ),
 
 ]
 
 private createIndustryWeServe(image: string, desc: string) {
  return { image, desc };
}
 industry=[
  this.createindustry(
    '/assets/icon/industries-we-Serve/ecommerce.svg',
    'E-commerce',
    ['Online Stores', 'Customer Management', 'Order Fulfillment'],
  ),
  this.createindustry(
    '/assets/icon/industries-we-Serve/winetrading.svg',
    ' Wine Trading Solutions',
    ['Wine Distribution', 'Sales and Marketing', 'Inventory Management'],
  ),
  
  this.createindustry(
    '/assets/icon/industries-we-Serve/e-learning.svg',
    'E-learning',
    ['Online Courses', 'Education Platforms', 'Student Management'],
  ),
  this.createindustry(
    '/assets/icon/industries-we-Serve/fintech.svg',
    'Fintech',
    ['Banking Solutions', 'Payment Gateways', 'Cryptocurrency Solutions'],
  ),
  this.createindustry(
    '/assets/icon/industries-we-Serve/health care.svg',
    ' Healthcare',
    ['Hospital Management', 'Chiro Practice Solution', 'Telemedicine Solution',],
  ),
  this.createindustry(
    '/assets/icon/industries-we-Serve/construction.svg',
    ' Construction',
    ['Project Management', 'Resource Allocation', 'Safety Compliance'],
  ),
  this.createindustry(
    '/assets/icon/industries-we-Serve/manufacturing.svg',
    ' Manufacturing',
    ['Inventory Management', 'Supply Chain Solutions', 'Production Monitoring'],
  ),
  this.createindustry(
    '/assets/icon/industries-we-Serve/realestate.svg',
    ' Real Estate',
    ['Property Management', 'Sales and Marketing', 'Virtual Tours'],
  ),
 ]


private createindustry(image:string, desc:string, list: string[]){
  return {image, desc, list};
}
}