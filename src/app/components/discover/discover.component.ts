import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent {
  @Output() sendmes = new EventEmitter;
  @Input() coll: any;
  @Input() idm: any;
  @Input() object: any;
  close(){
    this.sendmes.emit()
  }
  ngOnInit(){
    console.log(this.object);
    
  }
  
}
