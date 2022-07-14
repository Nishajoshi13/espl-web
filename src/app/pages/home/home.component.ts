import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  homeCard = [
    {
      title: 'Who are we',
      desc: `Test`,
    },
    {
      title: 'What we do',
      desc: `We embrace technologies and find the best software solutions to empower your business.
  `,
    },
  ];

  slides = [
    { image: '/assets/images/general/test1.jpg' },
    { image: '/assets/images/general/test2.jpg' },
  ];
  ngOnInit() {}
}
