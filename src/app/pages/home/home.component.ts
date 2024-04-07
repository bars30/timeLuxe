import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('backImg') backImg!: ElementRef<HTMLImageElement>;
  @ViewChild('textConth1') textConth1!: ElementRef<HTMLDivElement>;
  @ViewChild('textContp') textContp!: ElementRef<HTMLDivElement>;
  @ViewChild('brandName') brandName!: ElementRef<HTMLDivElement>;
  @ViewChild('brandDesc') brandDesc!: ElementRef<HTMLDivElement>;
  @ViewChild('brandDesc2') brandDesc2!: ElementRef<HTMLDivElement>;
  @ViewChild('brandName2') brandName2!: ElementRef<HTMLDivElement>;

  @ViewChild('h2span') h2span !: ElementRef<HTMLSpanElement>;
  constructor(@Inject(DOCUMENT) private documnet: Document){

  }
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  // ngOnInit(){
  //   this.canvas.nativeElement.height = window.innerHeight;

  //   const context = this.canvas.nativeElement.getContext("2d");
  //   const frameCount = 131;

  //   const currentFrame = (index: number) => `/assets/img/watch/${(index + 1).toString()}.jpg`
  //   const images: any = [];
  //   let ball = {frame: 0}

  //   for(let i = 0; i < frameCount; i++){
  //   const img = new Image();
  //   img.src = currentFrame(i);
  //   images.push(img)
  //   }

  //   gsap.to(ball, {
  //   frame: frameCount - 1,
  //   snap: "frame",
  //   ease: "none",
  //   scrollTrigger: {
  //     scrub: true,
  //     pin: "canvas",
  //     end: "500%",
  //     // markers: true
  //   },
  //   onUpdate: render,
  //   })


  //   images[0].onload = render;

  //   gsap.fromTo(
  //   ".ball-text",
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //     scrollTrigger: {
  //       scrub: 1,

  //       start: "50%",
  //       end: "60%",
  //     },
  //     onComplete: () => {
  //       gsap.to(".ball-text", { opacity: 0 });
  //     },
  //   }
  //   );

  //   function render() {
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //   context.drawImage(images[ball.frame], 0, 0, canvas.width, canvas.height);
  //   }
  // }

  ngAfterViewInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
    
    // 
    this.watch()
  }

  initialAnimations(): void {
    gsap.set(this.backImg.nativeElement, { scale: 1 });
    gsap.set(this.brandName.nativeElement, { translate: '-50px;' });
    gsap.set(this.brandDesc.nativeElement, { translate: '50px;' });

  }

  initScrollAnimations(): void {
    gsap.to(this.backImg.nativeElement, {

      duration: 0, // Specify the duration here (in seconds)
      scrollTrigger: {
        trigger: this.backImg.nativeElement,
        scrub: true
      },
      start: 'center center', 
      end: 'bottom'
    });
    gsap.to(this.brandName.nativeElement, {
      translate: '0',
      duration: 1, // Specify the duration here (in seconds)
      scrollTrigger: {
        trigger: this.brandName.nativeElement,
        scrub: true
      },
      start: 'center center', 
      end: 'bottom'
    });
    gsap.to(this.brandDesc.nativeElement, {
      translate: '0',
      duration: 1, // Specify the duration here (in seconds)
      scrollTrigger: {
        trigger: this.brandDesc.nativeElement,
        scrub: true
      },
      start: 'center center', 
      end: 'bottom'
    });

    gsap.fromTo(this.brandDesc2.nativeElement, {translate: '-50px'}, {
      translate: '0',
      duration: 1, // Specify the duration here (in seconds)
      scrollTrigger: {
        trigger: this.brandDesc.nativeElement,
        scrub: true
      },
      start: 'center center', 
      end: 'bottom'
    });
    gsap.fromTo(this.brandName2.nativeElement, {translate: '50px'}, {
      translate: '0',
      duration: 1, // Specify the duration here (in seconds)
      scrollTrigger: {
        trigger: this.brandDesc.nativeElement,
        scrub: true
      },
      start: 'center center', 
      end: 'bottom'
    });
    gsap.fromTo(this.h2span.nativeElement, {translate: '0', rotate: '0deg'}, {
      translate: '2500%',
      rotate: '47deg',
      duration: 1, // Specify the duration here (in seconds)
      scrollTrigger: {
        trigger: this.h2span.nativeElement,
        scrub: true
      },
      start: 'center center', 
      end: 'bottom'
    });
    

  }
  log(){

    
  }
  // watch(){
  //   this.canvas.nativeElement.width = window.innerWidth;
  //   this.canvas.nativeElement.height = window.innerHeight;

  //   const context = this.canvas.nativeElement.getContext("2d");
  //   const frameCount = 73;
  //   const currentFrame = (index: any) => `/assets/img/watch/${(index + 1).toString()}.jpg`;
  //   const fimg = new Image();
  //   fimg.src = '/assets/img/watch/242.jpg'
  //   const images = [fimg];
  //   let ball = {frame: 0}
  //   // console.log(images);
    
  //   for(let i = 15; i < frameCount; i++){
  //     const img = new Image();
  //     img.src = currentFrame(i);
  //     images.push(img)
  //     // console.log(images);
      
  //    }
  //    gsap.to(ball, {
  //     frame: frameCount - 1,
  //     snap: "frame",
  //     ease: "none",
  //     scrollTrigger: {
  //      scrub: true,
  //      pin: "canvas",
  //      end: "500%",
  //      // markers: true
  //     },
  //     onUpdate: render,
  //    })

  //    images[0].onload = render;
  //   //  console.log(images);
  //    gsap.fromTo(
  //     ".ball-text",
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       scrollTrigger: {
  //         scrub: 1,
     
  //         start: "50%",
  //         end: "60%",
  //       },
  //       onComplete: () => {
  //         gsap.to(".ball-text", { opacity: 0 });
  //       },
  //     }
  //    );

  //    function render() {
  //     if(!context){return}
  //     context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //     context.drawImage(images[ball.frame], 0, 0, window.innerWidth, window.innerHeight);
  //    }
  //   }
  // watch() {
  //   this.canvas.nativeElement.width = window.innerWidth;
  //   this.canvas.nativeElement.height = window.innerHeight;
  
  //   const context = this.canvas.nativeElement.getContext("2d");
  //   const frameCount = 79;
  //   const images: any = [];
  
  //   for (let i = 0; i < frameCount; i++) {
  //     const img = new Image();
  //     img.src = `/assets/img/watch/${i + 1}.png`;
  //     images.push(img);
  //   }
  
  //   let ball = { frame: 0 };
  
  //   gsap.to(ball, {
  //     frame: frameCount - 1,
  //     snap: "frame",
  //     ease: "none",
  //     scrollTrigger: {
  //       scrub: true,
  //       pin: "canvas",
  //       end: "500%",
  //     },
  //     onUpdate: render,
  //   });
  
  //   images[0].onload = render;
  
  //   gsap.fromTo(
  //     ".ball-text",
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       scrollTrigger: {
  //         scrub: 1,
  //         start: "50%",
  //         end: "60%",
  //       },
  //       onComplete: () => {
  //         gsap.to(".ball-text", { opacity: 0 });
  //       },
  //     }
  //   );
  
  //   function render() {
  //     if (!context) return;
  //     context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //     context.drawImage(images[ball.frame], 0, 0, window.innerWidth, window.innerHeight);
  //   }
  // }
  watch() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
  
    const context = this.canvas.nativeElement.getContext("2d");
    const frameCount = 79;
    const images: any = [];
  
    const isMobile = window.innerWidth <= 850;
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      if (isMobile) {
        img.src = `/assets/img/watch/mobile2/${i + 1}.png`;
      } else {
        img.src = `/assets/img/watch/${i + 1}.png`;
      }
      images.push(img);
    }
  
    let ball = { frame: 0 };
  
    gsap.to(ball, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "500%",
      },
      onUpdate: render,
    });
  
    images[0].onload = render;
  
    gsap.fromTo(
      ".ball-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 1,
          start: "50%",
          end: "60%",
        },
        onComplete: () => {
          gsap.to(".ball-text", { opacity: 0 });
        },
      }
    );
  
    function render() {
      if (!context) return;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.drawImage(images[ball.frame], 0, 0, window.innerWidth, window.innerHeight);
    }
  }
  
  
}
