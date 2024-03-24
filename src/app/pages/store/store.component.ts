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
    myheader1: "",
    myheader2: "",
    myheader3: "",
    myheader4:  "",
    myheader5: "",
    myheader6:  ""
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
  }
  showl(){
    console.log('nervvvvvvvvv');
    console.log(this.collections[0].watches[0].collection);
    console.log(this.collections[0]?.watches[0]?.desription);
    console.log(this.collections[1].watches[0].collection);
    console.log(this.collections[1]?.watches[0]?.desription);
    console.log('nervvvvvvvvv');
    
    
  }
  showDiscoverComp(){
    this.showDiscoverComponent = !this.showDiscoverComponent
  }
}
