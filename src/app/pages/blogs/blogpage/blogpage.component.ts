import { Component } from '@angular/core';
import {BlogInfo} from "../blogs.module";
import {SharedService} from "../../shared/shared.service";
import {Routes, ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './blogpage.component.html',
  styleUrl: './blogpage.component.scss'
})
export class BlogpageComponent {
  Info: BlogInfo = new BlogInfo('','','',[])
  //Database for temporary use
  Database = new Map<string, BlogInfo>();
  BlogKey = ''

  constructor(private sharedService: SharedService,private route: ActivatedRoute) {}

  isImageUrl(url: string): boolean {
    return url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;
  }


  ngOnInit(): void {
    //inserting data into temporary database
    this.Database.set('the-strategic-imperative-of-AI-in-2024',
      new BlogInfo(
        'The Strategic Imperative of AI in 2024',
        'assets/images/blog-icons/docker/ai2024.png',
        'Mark Hinkle',
        [
          {
            subhead:'',
            description: [
              'The winds of change are sweeping across industries, propelled by the transformative power of generative artificial intelligence (GenAI). In 2024, AI has become a strategic imperative for enterprises seeking to stay ahead of the curve. Although some organizations may view AI with hesitation, the reality is that ignoring its potential puts them at risk of falling behind. \n',
              'In this article, we examine the incredible growth of AI and explore its potential power to transform industries and help enterprises accelerate innovation.'
            ]
          },
          {
            subhead:'The Cambrian explosion of artificial intelligence',
            description: [
              'You are probably familiar with chatbots for desktop users, such as ChatGPT and Google Gemini. However, the landscape of enterprise applications is teeming with examples of AI driving differentiation and success. Consider healthcare, where AI algorithms can aid in early disease detection and personalized treatment plans, or finance, where AI-powered fraud detection systems and algorithmic trading are reshaping the industry. In manufacturing, AI-driven robots can optimize production lines, and predictive maintenance can help minimize downtime.',
              'We are seeing an even more significant expansion as new types of AI systems provide solutions to problems previously not attainable with machine learning. New GenAI systems offer capabilities to solve organizations’ most pressing issues faster and more efficiently than ever.',
              'In 2023, IBM reported that 42% of IT professionals at large organizations report that they have actively deployed AI, while an additional 40% are actively exploring using the technology. Across the board, businesses are leveraging AI to innovate, gain market share, and secure a competitive edge.',
              'The landscape of AI models has undergone a fascinating shift in a very short time. We have witnessed the initial explosion of behemoths like OpenAI’s GPT 4o, boasting billions of parameters and impressive capabilities. These large language models (LLMs) captivated the world with their ability to generate human-quality text, translate languages, and answer complex questions.'
            ]
          },
          {
            subhead:'Shift in scale',
            description: [
              'The sheer scale of these LLMs, however, has presented challenges in terms of computational resources, training costs, and environmental impact. As sustainability concerns have intensified and accessibility has become a priority, a new breed of AI models has emerged: the small and robust models.',
              'These smaller models, exemplified by projects like Mixtral, Microsoft’s Phi, Google’s Gemini, and others, operate with significantly fewer parameters, often in the millions or even tens of millions. This reduction in size does not equate to a decrease in capability. These models leverage innovative architectures and training techniques to achieve impressive performance metrics, sometimes rivaling their larger counterparts.',
              'assets/images/blog-icons/docker/dockerpage.png',
              'As the number and type of models have increased, there has also been growth of open source ethos in AI. Hugging Face, a repository for open source AI software, datasets, and development tools, has seen its list of models grow to more than 500,000 models of all shapes and sizes suited for various applications (Figure 1). Many of these models are ideally suited for deployment in containers that can be developed locally or in the data center.'
            ]
          },
          {
            subhead:'Operational drivers',
            description:[
              'Beyond the competitive landscape, AI presents a compelling value proposition through its operational benefits. Imagine automating repetitive tasks, extracting actionable insights from massive datasets, and delivering more personalized experiences. AI facilitates data-driven decision-making as users push projects to completion, improving efficiency, cost reduction, and resource optimization.'
            ]
          },
          {
            subhead: 'Alignment with business goals',
            description:[
              'Users must align AI initiatives with specific business goals and objectives, however, rather than simply deploying AI as a technology standalone. Whether driving revenue growth, expanding market share, or enhancing operational excellence, AI-driven projects can be powerful when directed toward strategic priorities. For instance, AI-powered recommendation engines can help boost sales, while chatbots can improve customer service, ultimately contributing to overall business success.'
            ]
          },
          {
            subhead: 'Digital transformation',
            description:[
              'Moreover, AI has become a cornerstone of digital transformation initiatives. Businesses are undergoing a fundamental shift toward data-driven, interconnected operations, and AI plays a critical role in unlocking new opportunities and accelerating this transformation. From personalized marketing campaigns to hyper-efficient supply chains, AI empowers organizations to adapt to ever-changing market dynamics and achieve sustainable growth.'
            ]
          },
          {
            subhead: 'Conclusion',
            description: [
              'In 2024 and beyond, AI is poised to reshape the business landscape. Enterprises that recognize the strategic imperative of AI and embrace it will stay ahead of the curve, while those that lag may struggle to remain competitive. Businesses need to consider how best to invest in AI, develop a clear AI strategy, and adopt this transformative technology.',
              'To learn more, read the whitepaper Docker, Putting the AI in Containers, which aims to equip you with the knowledge and tools to unlock the transformative potential of AI, starting with the powerful platform of Docker containerization.'
            ]
          }
        ]
      ));

    this.Database.set('automating-docker-image-builds-with-pulumi',
      new BlogInfo(
        'Automating Docker Image Builds with Pulumi and Docker Build Cloud',
        'assets/images/blog-icons/docker/pulumidocker.png',
        'Rebekah Dumouchelle',
        [
          {
            subhead:'',
            description: [
              'Pulumi is an Infrastructure as Code (IaC) platform that simplifies resource management across any cloud or SaaS provider, including Docker. Pulumi providers are integrations with useful tools and vendors. Pulumi’s new Docker Build provider is about making your builds even easier, faster, and more reliable.',
              'In this post, we will dive into how Pulumi’s new Docker Build provider works with Docker Build Cloud to streamline building, deploying, and managing containerized applications. First, we’ll set up a project using Docker Build Cloud and Pulumi. Then, we’ll explore cool use cases that showcase how you can leverage this provider to simplify your build and deployment pipelines.'
            ]
          },
          {
            subhead:'Pulumi Docker Build provider features',
            description: [
              'Docker Build Cloud support: Offload your builds to the cloud and free up your local resources. Faster builds mean fewer headaches..',
              'Multi-platform support: Build Docker images that work on different hardware architectures without breaking a sweat.',
              'Advanced caching: Say goodbye to redundant builds. In addition to the shared caching available when you use Docker Build Cloud, this provider supports multiple cache backends, like Amazon S3, GitHub Actions, and even local disk, to keep your builds efficient.',
              'Flexible export options: Customize where your Docker images go after they’re built — export to registries, filesystems, or wherever your workflow needs.'
            ]
          },
          {
            subhead:'Getting started with Docker Build Cloud and Pulumi',
            description: [
              'Docker Build Cloud is Docker’s newest offering that provides a pair of AMD and Arm builders in the cloud and shared cache for your team, resulting in up to 39x faster image builds. Docker Personal, Pro, Team, and Business plans include a set number of Build Cloud minutes, or you can purchase a Build Cloud Team plan to add minutes. Learn more about Docker Build Cloud plans.',
              'The example builds an NGINX Dockerfile using a Docker Build Cloud builder. We will create a Docker Build Cloud builder, create a Pulumi program in Typescript, and build our image.'
            ]
          },
          {
            subhead:'Step 1: Set up your Docker Build Cloud builder\n',
            description: [
              'Building images locally means being subject to local compute and storage availability. Pulumi allows users to build images with Docker Build Cloud.',
              'The Pulumi Docker Build provider fully supports Docker Build Cloud, which unlocks new capabilities, as individual team members or a CI/CD pipeline can fully take advantage of improved build speeds, shared build cache, and native multi-platform builds.',
              'If you still need to create a builder, follow the steps below; otherwise, skip to step 1C.',
              'A. Log in to your Docker Build Cloud account.',
              'B. Create a new cloud builder named my-cool-builder.',
              'assets/images/blog-icons/docker/pulumi1.png',
              'C. In your local machine, sign in to your Docker account.',
              'D. Add your existing cloud builder endpoint.',
              'assets/images/blog-icons/docker/pulumi2.png',
              'E. Optionally, see that your new builder is available in Docker Desktop.\n',
              'assets/images/blog-icons/docker/pulumi3.png',
            ]
          },
          {
            subhead:'Step 2: Set up your Pulumi project',
            description: [
              'To create your first Pulumi project, start with a Pulumi template. Pulumi has curated hundreds of templates that are directly integrated with the Pulumi CLI via pulumi new. In particular, the Pulumi team has created a Pulumi template for Docker Build Cloud to get you started.',
              'The Pulumi programming model centers around defining infrastructure using popular programming languages. This approach allows you to leverage existing programming tools and define cloud resources using familiar syntaxes such as loops and conditionals.',
              'To copy the Pulumi template locally:',
              'assets/images/blog-icons/docker/pulumi4.png',
              'Optionally, explore your Pulumi program. The hello-dbc folder has everything you need to build a Dockerfile into an image with Pulumi. Your Pulumi program starts with an entry point, typically a function written in your chosen programming language. This function defines the infrastructure resources and configurations for your project. For TypeScript, that file is index.ts, and the contents are shown below:',
              'assets/images/blog-icons/docker/pulumi5.png'
            ]
          },
          {
            subhead:'Next steps',
            description: [
              'Infrastructure as Code (IaC) is key to managing modern cloud-native development, and Docker lets developers create and control images with Dockerfiles and Docker Compose files. But when the situation gets more complex, like deploying across different cloud platforms, Pulumi can offer additional flexibility and advanced infrastructure features. The Docker Build provider supports Docker Build Cloud, streamlining building, deploying, and managing containerized applications, which helps development teams work together more effectively and maintain agility.',
              'Pulumi’s latest Docker Build provider, powered by BuildKit, improves flexibility and efficiency in Docker builds. By applying IaC principles, developers manage infrastructure with code, even in intricate scenarios. This means you can focus on building and deploying your containerized workloads without the hassle of complex infrastructure challenges.',
            ]
          }
        ]
      ));

    this.Database.set('mastering-the-first-impression',
      new BlogInfo(
        'Mastering the First Impression: Your intriguing post title goes here',
        'assets/images/blog-icons/photo-3.webp',
        'Levi Ackerman',[
          {
            subhead:'Welcome to the Entangle Software Private Limited Blog',
            description: [
              'Welcome to the Entangle Software Private Limited Blog – your gateway to the latest insights in web and app development. We are excited to have you join us on this journey through the ever-evolving digital landscape. Our aim is to unravel industry trends, share expert tips, and showcase our passion for crafting exceptional digital experiences.',
            ]
          },
          {
            subhead:'Unraveling Industry Trends',
            description: [
              'Welcome to the Entangle Software Private Limited blog – your gateway to the latest insights in web and app development. Join us on a journey through the ever-evolving digital landscape, where we unravel industry trends, share expert tips, and showcase our passion for crafting exceptional digital experiences.',
              'From the rise of artificial intelligence and machine learning to the impact of blockchain technology, we delve into the innovations that are shaping the future of digital transformation. Our expert team of developers and designers share their knowledge and expertise, offering practical advice and actionable strategies to help you navigate the complexities of the digital world.'
            ]
          },
          {
            subhead:'Empowering Businesses in the Dynamic World of Technology',
            description: [
              'Digital transformation is no longer an option but a necessity for businesses in today’s competitive landscape. Our blog aims to empower businesses by equipping them with the knowledge and tools they need to thrive in the digital world. We provide practical tips and actionable strategies to help businesses leverage technology to drive growth, improve efficiency, and enhance customer experiences.',
              'From choosing the right development framework to optimizing user interfaces, our blog covers a wide range of topics that are relevant to businesses of all sizes and industries. We believe that by sharing our expertise and insights, we can contribute to the success of businesses in the digital age.',
              'Stay connected with us as we continue to explore the art of innovation and unravel the complexities of digital transformation. Together, let’s navigate the ever-changing digital landscape and unlock the full potential of technology for your business.'
            ]
          }
        ]
      ));

    this.Database.set('crafting-captivating-headlines',
        new BlogInfo(
          'Crafting Captivating Headlines: Your awesome post title goes here',
          'assets/images/blog-icons/photo-1.webp',
          'Erwin Smith',
          [
            {
              subhead: 'Engaging Introductions: Capturing Your Audience’s Interest',
              description: [
                'The initial impression your blog post makes is crucial, and that’s where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.',
              ]
            },
            {
              subhead: 'Crafting Informative and Cohesive Body Content',
              description: [
                'Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.'
              ]
            },
            {
              subhead: 'Powerful Closures: Leaving a Lasting Impression',
              description: [
                'Concluding your blog post isn’t just about wrapping things up – it’s your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers’ minds, inspiring them to explore further or apply what they’ve learned.'
              ]
            }
          ]
        )
      )

    this.Database.set('the-art-of-drawing-reader-introduction',
      new BlogInfo(
        'The Art of Drawing Readers In: Your attractive post title goes here',
        'assets/images/blog-icons/photo-2.webp',
        'Bellman Ford',
        [
          {
            subhead: 'Engaging Introductions: Capturing Your Audience’s Interest',
            description: [
              'The initial impression your blog post makes is crucial, and that’s where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.'
            ]
          },
          {
            subhead: 'Crafting Informative and Cohesive Body Content',
            description: [
              'Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.'
            ]
          },
          {
            subhead: 'Powerful Closures: Leaving a Lasting Impression',
            description: [
              'Concluding your blog post isn’t just about wrapping things up – it’s your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers’ minds, inspiring them to explore further or apply what they’ve learned.'
            ]
          }
        ]
      )
    )

    this.Database.set('web-development',
      new BlogInfo(
        'No content Added so far','','Sumit Kumar',[]
      )
    )
    this.BlogKey = this.route.snapshot.params['id'];
    // @ts-ignore
    this.Info = this.Database.get(this.BlogKey)
  }
}
