import { Component } from '@angular/core';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  webDevContent = [
    {
      title: 'Web Frontend',
      desc: `We build highly scalable, secure, and UI-rich applications across 
      several domains that work for every user regardless of their browser, 
      helping businesses achieve a competitive edge by 
      leveraging the latest technologies like Angular, React, Javascript, Jquery, Bootstrap.
      `,
    },
    {
      title: 'Backend solutions',
      desc: `Web and mobile applications need to host a server-side backend to process and manage data. 
      We ensure dynamic, secure, and optimised backend solutions for your applications. 
      Our expertise ensures that your business gets what it needs.`,
    },
    {
      title: 'Mobile Apps',
      desc: `The rapid growth in the number of mobile app users has highlighted 
      the importance of high-quality mobile-based applications. 
      We build native and hybrid mobile apps that can boost your customers' 
      engagement and significantly scale your business.`,
    },
  ];
  constructor() {}
}
