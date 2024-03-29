import { Component, Input } from '@angular/core';
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
import { PatekphillipestoreComponent } from 'src/app/components/patekphillipestore/patekphillipestore.component';
import { RolexStoreService } from 'src/app/services/rolex-store.service';
import { PatekphilippeservService } from 'src/app/services/patekphilippeserv.service';
import { AudemarsPiguetComponent } from 'src/app/components/audemars-piguet/audemars-piguet.component';
import { CartierComponent } from 'src/app/components/cartier/cartier.component';
import { JaegerComponent } from 'src/app/components/jaeger/jaeger.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule, DiscoverComponent 
  , RouterLink, RolexStoreComponent, PatekphillipestoreComponent,
  AudemarsPiguetComponent, CartierComponent, JaegerComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  
  showRolexStore: boolean = true;
  loadNextHttp: boolean = false;


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
  collectionsPatekPhillipe: any = []
  collectionsAudemarsPiguet:  any = []
  collectionsCartier:  any = []
  collectionsJaeger: any = []

  collections:any =  [
     []
  ]
  showSpinner: boolean = true


  constructor(private req: RequestService,
    private rolexSer: RolexStoreService,
    private patekPhillipeServ: PatekphilippeservService){
    
  }
  i: number = 0;

  ngOnInit(){
    this.loadNextHttp = this.rolexSer.loadNext

    this.req.getData<RequestModS>(enviroenment.bestselledwatches.get).subscribe((res)=>{
      this.stupArray = res;
      this.bestselledWatches = this.stupArray.watches
    })
    // this.getDataRolex()
    this.collectionsRolex = this.rolexSer.collectionsRolex

    this.rolexSer.loadNext$.subscribe((loadNext) => {
      if (loadNext) {
        this.collectionsPatekPhillipe = this.patekPhillipeServ.patekphilippecoll

        
          this.req.getData<RequestModS>(enviroenment.patekphillipe.grandcomplications.get).subscribe((res)=>{
            console.log(res);
            for (let index = 0; index < res.cont.length; index++) {
              this.collectionsPatekPhillipe.push(res.cont[index])
            }   
            console.log('Patek Philippe');
            
          })
          this.req.getData<RequestModS>(enviroenment.audemarspiguet.get).subscribe((res)=>{
            console.log(res);
            for (let index = 0; index < res.cont.length; index++) {
              this.collectionsAudemarsPiguet.push(res.cont[index])
            }   
            })
          
            this.req.getData<RequestModS>(enviroenment.cartier.tank.get).subscribe((res)=>{
              console.log(res);
              for (let index = 0; index < res.cont.length; index++) {
                this.collectionsCartier.push(res.cont[index])
              }   
              })

              this.req.getData<RequestModS>(enviroenment.jaeger.reservo.get).subscribe((res)=>{
                console.log(res);
                for (let index = 0; index < res.cont.length; index++) {
                  this.collectionsJaeger.push(res.cont[index])
                }   
                })
  
      }
      
      
      
    });

  }
  showl(){
  console.log(this.collectionsCartier);
  
    
  }
  showDiscoverComp(coll: any, model: any){
    this.showDiscoverComponent = !this.showDiscoverComponent;
    console.log(coll);
    console.log(model);
    this.coll = coll
    this.idm = model
  }
}
