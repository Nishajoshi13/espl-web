import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService} from "../shared/shared.service";
import {BlogInfo} from "./blogs.module";

@Component({
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  constructor(private sharedService: SharedService){
  }


  cards = [
    {
      img: 'assets/images/blog-icons/docker/ai2024.png',
      date: 'May 22, 2024',
      title: 'The Strategic Imperative of AI in 2024',
      url: 'the-strategic-imperative-of-AI-in-2024',
      desc: `The winds of change are sweeping across industries, propelled by the transformative power of generative artificial intelligence (GenAI). In 2024, AI has become a strategic imperative for enterprises seeking to stay ahead of the curve.`,
    }
    ,{
      img: 'assets/images/blog-icons/docker/pulumidocker.png',
      date: 'May 14, 2024',
      title: 'Automating Docker Image Builds with Pulumi and Docker Build Cloud',
      url:  'automating-docker-image-builds-with-pulumi',
      desc: `Pulumi is an Infrastructure as Code (IaC) platform that simplifies resource management across any cloud or SaaS provider, including Docker. Pulumi providers are integrations with useful tools.`,
    },
    {
      img: 'assets/images/blog-icons/photo-1.webp',
      date: '25 jun 2024',
      title: 'Crafting Captivating Headlines: Your awesome post title goes here',
      url: 'crafting-captivating-headlines',
      desc: `Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction.`,
    },
    {
      img: 'assets/images/blog-icons/photo-2.webp',
      date: '25 jun 2024',
      title: 'The Art of Drawing Readers In: Your attractive post title goes here',
      url: 'the-art-of-drawing-reader-introduction',
      desc: `Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction`,
    },{
      img: 'assets/images/blog-icons/photo-3.webp',
      date: '25 jun 2024',
      title: 'Mastering the First Impression: Your intriguing post title goes here',
      url: 'mastering-the-first-impression',
      desc: `Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction.`,
    },{
      img: 'assets/images/blog-icons/photo-5.avif',
      date: '25 jun 2024',
      title: 'Web Development',
      url: 'web-development',
      desc: `We excel in scalable, secure, UI-rich web applications for all browsers.`,
    }
  ]



  OnReadMore(s: string){
      this.sharedService.setMessage(s)
  }

}
