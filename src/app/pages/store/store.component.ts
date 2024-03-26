import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { Bestselled } from 'src/app/models/bestselled';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { RequestModS } from 'src/app/models/requestmodel';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { DiscoverComponent } from 'src/app/components/discover/discover.component';
import { RouterLink } from '@angular/router';
import { RolexStoreComponent } from 'src/app/components/storecompo/rolex-store/rolex-store.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule, DiscoverComponent 
  , RouterLink, RolexStoreComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  coll: any;
  idm: any;
  rolexHeader: any =  {
    
  }
  showDiscoverComponent: boolean = false;
  selectedBrand:any = "Rolex";
  bestselledWatches !: Bestselled[];
  stupArray : RequestModS = {
    watches: "df",
    message: 'gyh'
  };
  collectionsRolex: any = []

  collections:any =  [
     []
  ]
  showSpinner: boolean = true


  constructor(private req: RequestService){
    
  }
  i: number = 0;
  getDataRolex(url: any){
    this.req.getData<RequestModS>(url).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        res.cont[index].collection = res.watches[0].collection
        this.collectionsRolex.push(res.cont[index])
      }
      this.showSpinner = false;
      console.log(this.i + '' + url);
      this.i++
    })
  }

  ngOnInit(){
    this.req.getData<RequestModS>(enviroenment.bestselledwatches.get).subscribe((res)=>{
      this.stupArray = res;
      this.bestselledWatches = this.stupArray.watches
    })

    
    this.getDataRolex(enviroenment.collection.rolex['1908'].get)
    this.getDataRolex(enviroenment.collection.rolex.skydweller.get)
    this.getDataRolex(enviroenment.collection.rolex.adydatejust.get)
    this.getDataRolex(enviroenment.collection.rolex.explorer.get)
    this.getDataRolex(enviroenment.collection.rolex.airking.get)
    this.getDataRolex(enviroenment.collection.rolex.deepsea.get)
    this.getDataRolex(enviroenment.collection.rolex.seadweller.get)
    this.getDataRolex(enviroenment.collection.rolex.yachtmaster.get)
    this.getDataRolex(enviroenment.collection.rolex.oysterperpetual.get)
    this.getDataRolex(enviroenment.collection.rolex.cosmographdaytona.get)
    this.getDataRolex(enviroenment.collection.rolex.daydate.get)
    this.getDataRolex(enviroenment.collection.rolex.gmtmasterll.get)
    this.getDataRolex(enviroenment.collection.rolex.submariner.get)
    this.getDataRolex(enviroenment.collection.rolex.datejust.get)
    
  }
  showl(){
  console.log(this.collectionsRolex);
  
    
  }
  showDiscoverComp(coll: any, model: any){
    this.showDiscoverComponent = !this.showDiscoverComponent;
    console.log(coll);
    console.log(model);
    this.coll = coll
    this.idm = model
  }
}
