import { Component, OnInit,AfterViewInit,ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-widget-carousel',
  templateUrl: './widget-carousel.component.html',
  styleUrls: ['./widget-carousel.component.scss'],
})
export class WidgetCarouselComponent implements OnInit {
 ngOnInit(): void {}



   items = [
     {
       type: 'clutch',
       content: {
         width: '270px',
         url: 'https://widget.clutch.co',
         widgetType: '7',
         height: '65',
         companyId: '2415738'
       }
     },
     {
       type: 'goodfirm',
       content: {
         widgetType: 'goodfirms-widget-t4',
         pattern: 'simple-basic',
         height: '120',
         companyId: '158764'
       }
     },
     {
       type: 'topdevelopers',
       content: {
         imgSrc: 'https://www.topdevelopers.co/assets/badges/app-2024/Ecommerce/badge-top-ecommerce-developers-2024.png',
         link: 'https://www.topdevelopers.co/directory/ecommerce-developers',
         imgAlt: 'eCommerce Development Companies',
         imgTitle: 'eCommerce Development Companies'
       }
     }
   ];
 
   // Double the items for a continuous effect
   repeatedItems = [...this.items, ...this.items];
 }
 
  
  


