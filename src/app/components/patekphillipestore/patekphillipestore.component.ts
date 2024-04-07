import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DiscoverComponent } from '../discover/discover.component';
import { Router } from '@angular/router';
import { DescripeservService } from 'src/app/services/descripeserv.service';

@Component({
  selector: 'app-patekphillipestore',
  templateUrl: './patekphillipestore.component.html',
  styleUrls: ['./patekphillipestore.component.css'],
  standalone: true,
  imports: [CommonModule, DiscoverComponent]
})
export class PatekphillipestoreComponent {
  @Input() collectionsPatekPhillipe: any = [];
  
  constructor(private descripserv: DescripeservService){}
  showDiscoverComp = this.descripserv.showDiscoverComp
  general: boolean = true;
  discoverInputObject = this.descripserv.discoverInputObject;
  openDescribe = this.descripserv.openDescribe;
  closeDiscoverComp = this.descripserv.closeDiscoverComp
}
