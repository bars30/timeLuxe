import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { RequestModS } from 'src/app/models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';
import Swiper from 'swiper';
import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('scrollLeft', style({})),
      state('scrollRight', style({})),
      transition('scrollLeft => scrollRight', [
        style({ scrollLeft: '{{ start }}' }),
        animate('{{ duration }}')
      ], { params: { start: '0px', duration: '500ms' } }),
      transition('scrollRight => scrollLeft', [
        style({ scrollLeft: '{{ start }}' }),
        animate('{{ duration }}')
      ], { params: { start: '0px', duration: '500ms' } })
    ])
  ]
})
export class DiscoverComponent {
  @Output() sendmes = new EventEmitter;
  @Input() coll: any;
  @Input() idm: any;
  close(){
    this.sendmes.emit()
  }
  @ViewChild('carousel') carousel!: ElementRef;

  images = [
    '../../../assets/img/descrip/1.png',
    '../../../assets/img/descrip/2.png',
    '../../../assets/img/descrip/3.png',
    '../../../assets/img/descrip/4.png',
    '../../../assets/img/descrip/5.png',
    '../../../assets/img/descrip/1.png',
    '../../../assets/img/descrip/2.png',
    '../../../assets/img/descrip/3.png',
    '../../../assets/img/descrip/4.png',
    '../../../assets/img/descrip/5.png'
  ];

  scrollDirection: string = 'scrollLeft'; // Initial animation state

  constructor() {}

  scroll(amount: number) {
    this.scrollDirection = amount > 0 ? 'scrollRight' : 'scrollLeft'; // Set the animation state
    const scrollAmount = amount * 250; // Adjust scroll amount
    this.carousel.nativeElement.scrollLeft += scrollAmount;
  }
}
