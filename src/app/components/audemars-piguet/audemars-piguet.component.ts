import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { RequestModS } from 'src/app/models/requestmodel';
import { DescripeservService } from 'src/app/services/descripeserv.service';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-audemars-piguet',
  standalone: true,
  imports: [CommonModule, DiscoverComponent],
  templateUrl: './audemars-piguet.component.html',
  styleUrls: ['./audemars-piguet.component.css']
})
export class AudemarsPiguetComponent {
  showDiscoverComp = this.descripserv.showDiscoverComp
  general: boolean = true;
  discoverInputObject = this.descripserv.discoverInputObject;
  openDescribe = this.descripserv.openDescribe;
  closeDiscoverComp = this.descripserv.closeDiscoverComp


  @Input() collectionsAudemarsPiguet: any = []
  collectionsAudemarsPiguetRoyalOak: any = []
  collectionsAudemarsPiguetRoyalOakOffshore: any = []
  collectionsAudemarsPiguetRoyalOakConcept: any = []
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show(num: number){
    if(num  == 1){
      this.show1 = true;
      this.show2 = false;
      this.show3 = false
    } else if(num  == 2){
      this.show2 = true;
      this.show1 = false;
      this.show3 = false
    } else if(num  == 3){
      this.show2 = false;
      this.show1 = false;
      this.show3 = true
    } else {
       this.show4 = true;
       this.show1 = false
       this.show2 = false
       this.show3 = false
    }
  }
  constructor(private req: RequestService,
    private descripserv: DescripeservService
  ){}
  ngOnInit(){
    this.req.getData<RequestModS>(enviroenment.audemarspiguet.royalOak.get).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        this.collectionsAudemarsPiguetRoyalOak.push(res.cont[index])
      }   
    })
    this.req.getData<RequestModS>(enviroenment.audemarspiguet.royaloakoffshore.get).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        this.collectionsAudemarsPiguetRoyalOakOffshore.push(res.cont[index])
      }   
    })
    this.req.getData<RequestModS>(enviroenment.audemarspiguet.royaloakconcept.get).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        this.collectionsAudemarsPiguetRoyalOakConcept.push(res.cont[index])
      }   
    })

  }
  log(){
    console.log(this.collectionsAudemarsPiguetRoyalOakOffshore);
    
  }
}
