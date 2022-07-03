import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  homeCard = [
    {
      title: 'Product Design',
      desc: `We embrace technologies to empower enterprises with enterprise & web content management, BPM & Big Data Analytics.`,
    },
    {
      title: 'IT management',
      desc: `
    Aspernatur sit adipisci quaerat unde at neque Redug Lagre
    dolor sit amet consectetu. independent agency, free from
    the internal demands.
  `,
    },
    {
      title: 'Data security',
      desc: `
    Aspernatur sit adipisci quaerat unde at neque Redug Lagre
    dolor sit amet consectetu. independent agency, free from
    the internal demands.
  `,
    },
  ];

  slides = [
    { image: '/assets/images/general/test1.jpg' },
    { image: '/assets/images/general/test2.jpg' },
  ];
  ngOnInit() {}
}
