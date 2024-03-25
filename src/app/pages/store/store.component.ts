import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { Bestselled } from 'src/app/models/bestselled';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { RequestModS } from 'src/app/models/requestmodel';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { DiscoverComponent } from 'src/app/components/discover/discover.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule, DiscoverComponent ],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  rolexHeader: any =  {
    
  }
  showDiscoverComponent: boolean = false;
  selectedBrand:any = "Rolex";
  bestselledWatches !: Bestselled[];
  stupArray : RequestModS = {
    watches: "df",
    message: 'gyh'
  };
  

  collections:any =  [
     []
  ]



  constructor(private req: RequestService){
    
  }

  ngOnInit(){
    this.req.getData<RequestModS>(enviroenment.bestselledwatches.get).subscribe((res)=>{
      console.log(res);
      this.stupArray = res;
      this.bestselledWatches = this.stupArray.watches
    })

    this.req.getData<RequestModS>(enviroenment.collection.rolex.datejust.get).subscribe((res)=>{
    this.collections[0] = res;
    this.rolexHeader.myheader1 = this.collections[0]?.watches[0]?.collection
    this.rolexHeader.myheader2 = this.collections[0]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.submariner.get).subscribe((res)=>{
      this.collections[1] = res;
      this.rolexHeader.myheader3 = this.collections[1]?.watches[0]?.collection
      this.rolexHeader.myheader4 = this.collections[1]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.gmtmasterll.get).subscribe((res)=>{
      this.collections[2] = res;
      this.rolexHeader.myheader5 = this.collections[2]?.watches[0]?.collection
      this.rolexHeader.myheader6 = this.collections[2]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.daydate.get).subscribe((res)=>{
      this.collections[3] = res;
      this.rolexHeader.myheader7 = this.collections[3]?.watches[0]?.collection
      this.rolexHeader.myheader8 = this.collections[3]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.cosmographdaytona.get).subscribe((res)=>{
      this.collections[4] = res;
      this.rolexHeader.myheader9 = this.collections[4]?.watches[0]?.collection
      this.rolexHeader.myheader10 = this.collections[4]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.oysterperpetual.get).subscribe((res)=>{
      this.collections[5] = res;
      this.rolexHeader.myheader11 = this.collections[5]?.watches[0]?.collection
      this.rolexHeader.myheader12 = this.collections[5]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.yachtmaster.get).subscribe((res)=>{
      this.collections[6] = res;
      this.rolexHeader.myheader13 = this.collections[6]?.watches[0]?.collection
      this.rolexHeader.myheader14 = this.collections[6]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.seadweller.get).subscribe((res)=>{
      this.collections[7] = res;
      this.rolexHeader.myheader15 = this.collections[7]?.watches[0]?.collection
      this.rolexHeader.myheader16 = this.collections[7]?.watches[0]?.desription
    })
    this.req.getData<RequestModS>(enviroenment.collection.rolex.deepsea.get).subscribe((res)=>{
      this.collections[8] = res;
      this.rolexHeader.myheader17 = this.collections[8]?.watches[0]?.collection
      this.rolexHeader.myheader18 = this.collections[8]?.watches[0]?.desription
    })
  }
  showl(){
  // console.log(this.collections);
  
    
  }
  showDiscoverComp(){
    this.showDiscoverComponent = !this.showDiscoverComponent
  }
}
