import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor(private router: Router ,private dialog:MatDialog) {}

  openVideoModal(videoCode:string) {
     const  videoUrl = 'https://www.youtube.com/embed/BMxD6hwMfWk?autoplay=1&mute=1';
    this.dialog.open(VideoModalComponent, {
      data: { videoUrl: videoUrl },
      width: '800px', 
      height: '450px', 
    });

  }
  navigateToContact() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact-us');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); 
        } else {
          console.error("Element with ID 'contact-us' not found!");
        }
      }, 100); 
    });
  }
 

  navigateTo(route: string) {
    this.router.navigate(['/portfolio'], { fragment: route });
  }

  techIconsUrl = 'assets/images/tech-icons';
  developPlatforms = [
    {
      img: 'assets/images/general/imac.svg',
      title: 'Web Development',
      desc: `We excel in scalable, secure, UI-rich web applications for all browsers.`,
    },
    {
      img: 'assets/images/general/mobile.svg',
      title: 'Digital Marketing',
      desc: `Enhancing brand visibility and driving growth through smart digital marketing.`,
    },
    {
      img: 'assets/images/general/devops-icon.png',
      title: 'DevOps',
      desc: `Our DevOps team enable effortless collaboration, deployment, and efficiency.`,
    },
    {
      img: "/assets/icon/icon/our services 48x48/Frontend.png",
      title: 'Hybrid App Devlopment',
      desc: `Creating high-performance hybrid apps for seamless user experiences across platforms.`,
    },
    {
      img: '/assets/icon/icon/our services 48x48/Backend.png',
      title: 'Shopify Devlopment',
      desc: `Empowering eCommerce success with tailored Shopify solutions`,
    },
    {
      img: '/assets/icon/icon/our services 48x48/api.png',
      title: 'Api Devlopment',
      desc: `Builds seamless interfaces for software communication and data exchange.`,
    },
    {
      img: '/assets/icon/icon/our services original size/mobile.svg',
      title: 'Mobile App Devlopment',
      desc: `Our mobile app services excel, helping you stand out and succeed.`,
    },
    {
      img: '/assets/icon/icon/our services 48x48/hire resource from us.png',
      title: 'Hire a dedicate resource',
      desc: `Build a professional offshore team with us to realize your dream project.`,
    },
    {
      img: '/assets/icon/icon/our services 48x48/wordpress.png',
      title: 'Wordpress Devlopment',
      desc: `Get a Wordpress website to showcase your service to the world through effective CMS.`,
    },
    {
      img: '/assets/icon/icon/our services original size/magento.png',
      title: 'Magento Devlopment Services',
      desc: `Customizes eCommerce stores for efficiency and scalability.`,
    },
    {
      img: '/assets/icon/icon/our services 48x48/ai.png',
      title: 'AI/ML',
      desc: 'Creates systems to automate tasks and analyze data with AI and Machine Learning.',
    },
    {
      img: '/assets/icon/icon/our services 48x48/Q-A.png',
      title: 'Q/A Testing',
      desc: `Ensures software quality by identifying and fixing bugs through systematic testing.`,
    },
  ];

  backendIcons = [
    { icon: `${this.techIconsUrl}/magento.svg`, title: 'Magento', tag: '' },
    { icon: `${this.techIconsUrl}/php.svg`, title: 'Php', tag: '' },
    { icon: `${this.techIconsUrl}/nodejs.svg`, title: 'Nodejs', tag: '' },
    { icon: `${this.techIconsUrl}/Golang.svg`, title: 'Golang', tag: '' },
    {
      icon: `${this.techIconsUrl}/wordpress.svg`,
      title: 'Wordpress',
      tag: 'wordpress',
    },
    { icon: `${this.techIconsUrl}/shopify.svg`, title: 'Shopify', tag: '' },
    { icon: `${this.techIconsUrl}/dotnet.png`, title: '.net', tag: '' },
    { icon: `${this.techIconsUrl}/Python.png`, title: 'Python', tag: '' },
  ];
  frontendIcons = [
    {
      icon: `${this.techIconsUrl}/angular.svg`,
      title: 'Angular',
      tag: 'angular',
    },
    { icon: `${this.techIconsUrl}/react.svg`, title: 'React', tag: '' },
    { icon: `${this.techIconsUrl}/jquery.svg`, title: 'Jquery', tag: '' },
    { icon: `${this.techIconsUrl}/html.svg`, title: 'Html', tag: '' },
    { icon: `${this.techIconsUrl}/css2.svg`, title: 'CSS', tag: '' },
    { icon: `${this.techIconsUrl}/sass.svg`, title: 'Scss', tag: '' },
    { icon: `${this.techIconsUrl}/bootstrap.svg`, title: 'BootStrap', tag: '' },
    { icon: `${this.techIconsUrl}/swift.png`, title: 'Swift', tag: '' },
    // { icon: `${this.techIconsUrl}/hybrid.png`, title: 'Hybrid', tag: '' },
    // { icon: `${this.techIconsUrl}/capacitor.jpg`, title: 'Capacitor', tag: '' },
  ];
  devopsIcons = [
    { icon: `${this.techIconsUrl}/docker.svg`, title: 'Docker', tag: '' },
    {
      icon: `${this.techIconsUrl}/kubernetes.svg`,
      title: 'Kubernetes',
      tag: '',
    },
    { icon: `${this.techIconsUrl}/open.svg`, title: 'Open shift', tag: '' },
    
  ];
  databaseIcons = [
    { icon: `${this.techIconsUrl}/mongodb.svg`, title: 'MongoDb', tag: '' },
    { icon: `${this.techIconsUrl}/sql-server.png`, title: 'SQL', tag: '' },
    { icon: `${this.techIconsUrl}/mariadb.png`, title: 'Maria db', tag: '' },
   
  ];
  cloudProvidersIcons = [
    { icon: `${this.techIconsUrl}/aws.png`, title: 'AWS', tag: '' },
    { icon: `${this.techIconsUrl}/gcp.png`, title: 'Gcp', tag: '' },
    { icon: `${this.techIconsUrl}/Azure.png`, title: 'Azure', tag: '' },
    
  ];
  hybridApplicationIcons = [
     { icon: `${this.techIconsUrl}/capacitor.jpg`, title: 'Capacitor', tag: '' },
    { icon: `${this.techIconsUrl}/scandipwa.png`, title: 'Scandipwa', tag: '' },
    { icon: `${this.techIconsUrl}/ionic.png`, title: 'ionic', tag: '' },
   
  ];
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
      0: {
        items: 2,
      },
      400: {
        items: 4,
      },
      740: {
        items: 6,
      },
      940: {
        items: 8,
      },
    },
  };
  whychooseus=[
    {
      image:'/assets/icon/icon/why choose us icon/it-expert (1).png',
      title:'PROFESSIONAL IT EXPERT',
      desc:'Our team comprises of IT professionals well versed in latest technologies.',
    },
    {
      image:'/assets/icon/icon/why choose us icon/customer.png',
      title:'FULLY CUSTOMISED SERVICE',
      desc:'To save you the trouble of complications, every service is customised to suit your needs.',
    },
    {
      image:'/assets/icon/icon/why choose us icon/goal.png',
      title:'GOAL ORIENTED APPROACH',
      desc:'Goal focussed work to validate apt inclusions to submit the best design.',
    },
    {
      image:'/assets/icon/icon/why choose us icon/track_record.png',
      title:'PROVEN TRACK RECORD',
      desc:'Unbeatable track record of 100% success rate due to our perfect and quality.',
    },
    {
      image:'/assets/icon/icon/why choose us icon/delivery.png',
      title:'ON TIME DELIVERY',
      desc:'Work at a pace by our professionals ensures delivery on time delivery.',
    },
    {
      image:'/assets/icon/icon/why choose us icon/support.png',
      title:'24*7 SUPPORT',
      desc:'Availability of our IT experts 24x7 to help you in the best way possible.',
    },
  ]; 
  question=[
    {
      ques:" How long will it take to get the website?",
      ans:"Can estimate the time frame based on the website design and development requirements that you have. Website features will differ based on the industries and business model.",
    },
    {
      ques:" What platforms do you use for web development?",
      ans:"We have around 75+ experts in the most familiar technologies Like WordPress, Joomla, PHP, Laravel, Node, React, Python, HTML5, Java Script, etc., Our experts will guide you to the best technology, which will suit your requirements..",
    },
    {
      ques:" Can you create a mobile-friendly website?",
      ans:"Yes. Nowadays, Websites get accessed by mobile users a lot. It's increasing day by day. So creating a mobile-friendly website is the most important factor in website design & Development.",
    },
    {
      ques:" How much does it cost for website development?",
      ans:"We do charge the minimum cost for website development. But not cheaper because premium quality will not come under cheaper. cost can be calculated based on the web development requirement that you have & technology that you choose.",
    },
    {
      ques:" Do you provide hosting for my website?",
      ans:"Yes, we do provide hosting services & maintenance support along with our web development services.",
    },
    {
      ques:" When do i have to pay?",
      ans:"To initiate the process for the agreed services, you have to pay an advance of between 40% to 50%. The remaining payment terms will be mentioned in the proposal.",
    },
    {
      ques:" Can you maintain my website?",
      ans:"Yes, after we completed the web development process we do provide website maintenance services also..",
    },
    {
      ques:" Why should i choose a website design company instead of freelancers?",
      ans:"website design company have professional developer team and they execute the projects with proper plans and they have expert website developers and managers who ensures professionalism, reliability, and comprehensive support compared to freelancers.",
    },
    {
      ques:"How can I track the status of my website?",
      ans:"We do provide a project management tool to monitor the project flow and task status.",
    },
    {
      ques:" Will Entangle help support website content Development?",
      ans:"Yes, Apart from web designing and web development Emtangle focuses on content like copywriting with proper seo standards which will make your website more online visiblity and engaging to customers which helps generating more leads.",
    },
    {
      ques:" What security steps do Entangle take in web development Projects?",
      ans:"Entangle gives importance to security measures for web development projects like SSL certificates, firewalls, regular updates, and secure coding practices.which will make your website 100% secured and well protected.",
    },
  ]
  ngOnInit() {}
}
