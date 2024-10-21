import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  techIconsUrl = 'assets/images/tech-icons';

  developPlatforms = [
    this.createPlatform(
      'assets/images/general/imac.svg',
      'Web Development',
      'We excel in scalable, secure, UI-rich web applications for all browsers.'
    ),
    this.createPlatform(
      'assets/images/general/mobile.svg',
      'Digital Marketing',
      'Enhancing brand visibility and driving growth through smart digital marketing.'
    ),
    this.createPlatform(
      'assets/images/general/devops-icon.png',
      'DevOps',
      'Our DevOps team enable effortless collaboration, deployment, and efficiency.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services 48x48/Frontend.png',
      'Hybrid App Development',
      'Creating high-performance hybrid apps for seamless user experiences across platforms.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services 48x48/Backend.png',
      'Shopify Development',
      'Empowering eCommerce success with tailored Shopify solutions'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services 48x48/api.png',
      'API Development',
      'Builds seamless interfaces for software communication and data exchange.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services original size/mobile.svg',
      'Mobile App Development',
      'Our mobile app services excel, helping you stand out and succeed.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services 48x48/hire resource from us.png',
      'Hire a Dedicated Resource',
      'Build a professional offshore team with us to realize your dream project.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services 48x48/wordpress.png',
      'WordPress Development',
      'Get a WordPress website to showcase your service to the world through effective CMS.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services original size/magento.png',
      'Magento Development Services',
      'Customizes eCommerce stores for efficiency and scalability.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services 48x48/ai.png',
      'AI/ML',
      'Creates systems to automate tasks and analyze data with AI and Machine Learning.'
    ),
    this.createPlatform(
      '/assets/icon/icon/our services 48x48/Q-A.png',
      'Q/A Testing',
      'Ensures software quality by identifying and fixing bugs through systematic testing.'
    ),
  ];

  backendIcons = this.createIcons([
    'magento.svg',
    'php.svg',
    'nodejs.svg',
    'Golang.svg',
    'wordpress.svg',
    'shopify.svg',
    'dotnet.png',
    'Python.png',
  ]);

  frontendIcons = this.createIcons([
    'angular.svg',
    'react.svg',
    'jquery.svg',
    'html.svg',
    'css2.svg',
    'sass.svg',
    'bootstrap.svg',
    'swift.png',
  ]);

  devopsIcons = this.createIcons([
    'docker.svg',
    'kubernetes.svg',
    'helm.svg',
    'argo.svg',
    'istio.svg',
    'terraform.svg',
  ]);

  databaseIcons = this.createIcons([
    'mongodb.svg',
    'sql-server.png',
    'mariadb.png',
    'postgres.svg',
    'redis.svg',
    'cassandra.svg',
  ]);

  cloudProvidersIcons = this.createIcons(['aws.svg', 'gcp.png', 'Azure.png']);

  hybridApplicationIcons = this.createIcons([
    'capacitor.jpg',
    'scandipwa.png',
    'ionic.png',
  ]);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 500,
    autoplaySpeed: 200,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: { items: 2 },
      400: { items: 4 },
      740: { items: 6 },
      940: { items: 8 },
    },
  };

  whyChooseUs = [
    this.createWhyChooseUsItem(
      '/assets/icon/icon/why choose us icon/it-expert (1).png',
      'PROFESSIONAL IT EXPERT',
      'Our team comprises of IT professionals well versed in latest technologies.'
    ),
    this.createWhyChooseUsItem(
      '/assets/icon/icon/why choose us icon/customer.png',
      'FULLY CUSTOMIZED SERVICE',
      'Every service is customized to suit your needs.'
    ),
    this.createWhyChooseUsItem(
      '/assets/icon/icon/why choose us icon/goal.png',
      'GOAL ORIENTED APPROACH',
      'Goal focused work to validate apt inclusions to submit the best design.'
    ),
    this.createWhyChooseUsItem(
      '/assets/icon/icon/why choose us icon/track_record.png',
      'PROVEN TRACK RECORD',
      'Unbeatable track record of 100% success rate due to our quality.'
    ),
    this.createWhyChooseUsItem(
      '/assets/icon/icon/why choose us icon/delivery.png',
      'ON TIME DELIVERY',
      'Work at a pace by our professionals ensures on-time delivery.'
    ),
    this.createWhyChooseUsItem(
      '/assets/icon/icon/why choose us icon/support.png',
      '24*7 SUPPORT',
      'Our IT experts are available 24x7 to help you in the best way possible.'
    ),
  ];

  questions = [
    this.createFAQItem(
      'How long will it take to get the website?',
      'Can estimate the time frame based on the website design and development requirements.'
    ),
    this.createFAQItem(
      'What platforms do you use for web development?',
      'We work with technologies like WordPress, Joomla, PHP, Laravel, Node, React, Python, etc.'
    ),
    this.createFAQItem(
      'Can you create a mobile-friendly website?',
      'Yes, creating a mobile-friendly website is a key factor in modern web design.'
    ),
    this.createFAQItem(
      'How much does it cost for website development?',
      'We charge based on the project requirements and technology. Premium quality does not come cheap.'
    ),
    this.createFAQItem(
      'Do you provide hosting for my website?',
      'Yes, we provide hosting services and maintenance support.'
    ),
    this.createFAQItem(
      'When do I have to pay?',
      'You need to pay an advance of 40% to 50% to initiate the project.'
    ),
    this.createFAQItem(
      'Can you maintain my website?',
      'Yes, we provide website maintenance services after development.'
    ),
    this.createFAQItem(
      'Why choose a web design company over freelancers?',
      'A company has professional teams with expert developers and managers ensuring professionalism and reliability.'
    ),
    this.createFAQItem(
      'How can I track the status of my website?',
      'We provide project management tools to monitor the project flow and task status.'
    ),
    this.createFAQItem(
      'Will Entangle help with website content development?',
      'Yes, we offer content development services with SEO optimization for better online visibility.'
    ),
    this.createFAQItem(
      'What security steps does Entangle take?',
      'We implement SSL certificates, firewalls, secure coding practices, and regular updates for website security.'
    ),
  ];

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {}

  openVideoModal(videoCode: string) {
    const videoUrl = `https://www.youtube.com/embed/${videoCode}?autoplay=1&mute=1`;
    this.dialog.open(VideoModalComponent, {
      data: { videoUrl },
      width: '800px',
      height: '450px',
    });
  }

  navigateToContact() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact-us');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

  navigateTo(route: string) {
    this.router.navigate(['/portfolio'], { fragment: route });
  }

  private createPlatform(img: string, title: string, desc: string) {
    return { img, title, desc };
  }

  private createIcons(icons: string[]) {
    return icons.map((icon) => ({
      icon: `${this.techIconsUrl}/${icon}`,
      title: this.capitalize(icon.split('.')[0]),
      tag: '',
    }));
  }

  private createWhyChooseUsItem(image: string, title: string, desc: string) {
    return { image, title, desc };
  }

  private createFAQItem(ques: string, ans: string) {
    return { ques, ans };
  }

  private capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
