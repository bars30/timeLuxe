import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolexStoreService } from 'src/app/services/rolex-store.service';

@Component({
  selector: 'app-rolex-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rolex-store.component.html',
  styleUrls: ['./rolex-store.component.css']
})
export class RolexStoreComponent {
  showSpinner: boolean = true
  collectionsRolex: any = []
  constructor(private rolexStoreService: RolexStoreService){
    this.collectionsRolex = this.rolexStoreService.collectionsRolex;
    this.showSpinner = false
  }
} 
