import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { RequestModS } from 'src/app/models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { DescripeservService } from 'src/app/services/descripeserv.service';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-jaeger',
  standalone: true,
  imports: [CommonModule, DiscoverComponent],
  templateUrl: './jaeger.component.html',
  styleUrls: ['./jaeger.component.css']
})
export class JaegerComponent {
  @Input() collectionsJaeger: any = []
  collectionsJaegerAll: any = []
  collectionsJaegerPolaris: any = []

  constructor(private req: RequestService,
    private descripserv: DescripeservService
  ){}

  showDiscoverComp = this.descripserv.showDiscoverComp
  general: boolean = true;
  discoverInputObject = this.descripserv.discoverInputObject;
  openDescribe = this.descripserv.openDescribe;
  closeDiscoverComp = this.descripserv.closeDiscoverComp

  ngOnInit(){
    this.collectionsJaegerAll = this.collectionsJaeger;

  }
  show(num: number){
    if(num  == 1){
      this.collectionsJaegerAll = this.collectionsJaeger
    } else {
      this.collectionsJaegerAll = this.collectionsJaegerPolaris
    }
  }
} 
