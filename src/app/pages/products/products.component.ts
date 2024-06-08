import { Component } from '@angular/core';

@Component({
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent {

  techIconsUrl = 'assets/images/tech-icons';
  productUrl = 'assets/products/'
  Projects = [
    {
      title:'Angular',
      logo: `${this.techIconsUrl}/angular.svg`,
      products: [
        {
          title: 'Svg Donught',
          desc: 'Svg Donught is an angular based library used for making donut chart with svg which make it extra-ordinary responsive even for the mobile view.',
          imageUrl: `${this.productUrl}/donut.png`,
          link : 'https://www.npmjs.com/package/svg-donught',
          type: 'Visit'
        }
      ]
    },
    {
      title: 'Wordpress',
      logo: `${this.techIconsUrl}/wordpress.svg`,
      products: [
        {
          title: 'Resto',
          desc: 'The customer is very important, the customer will be followed by the customer. As the land of the land, the mourning nor the corporal of the land, the pillow of the lion.',
          imageUrl: `${this.productUrl}/resto.png`,
          link : 'https://resto.entanglesoftware.com/',
          type: 'Visit'
        },
        {
          title: 'Entangle Vacation',
          desc: 'Kickstart your vacation with relaxation and adventure. Plan ahead, pack essentials, and set off with an open mind.',
          imageUrl: `${this.productUrl}/vacation.png`,
          link : 'https://vacation.entanglesoftware.com/',
          type: 'Visit'
        },
        {
          title: 'Entangle Cart',
          desc: 'Discover the latest in fashion at our e-commerce site, offering stylish clothing and accessories for every occasion. Enjoy great deals and fast shipping on top-quality apparel.',
          imageUrl: `${this.productUrl}/tcart.png`,
          link : 'https://tcart.entanglesoftware.com/',
          type: 'Visit'
        },
      ]
    },
    {
      title: 'Machine Learning',
      logo: `${this.techIconsUrl}/ml.svg`,
      products: [
        {
          title: 'Text to Speech Converter',
          desc: 'Transform text into natural, high-quality speech with VoiceWave. Customize voices, adjust speed, and integrate effortlessly with your favorite apps. Download now and let your words be heard!',
          imageUrl: `${this.techIconsUrl}/text.webp`,
          link: 'text-to-speech',
          type: 'Try'

        },
      ]
    },
  ]
}
