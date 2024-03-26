import { Injectable } from '@angular/core';
import { RequestModS } from '../models/requestmodel';
import { RequestService } from './request.service';
import { enviroenment } from 'src/enviroenments/enviroenment';

@Injectable({
  providedIn: 'root'
})
export class RolexStoreService {
  collectionsRolex: any = []
  showSpinner: boolean = true
  
  getDataRolex(url: any){
    this.req.getData<RequestModS>(url).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        res.cont[index].collection = res.watches[0].collection
        this.collectionsRolex.push(res.cont[index])
      }
      this.showSpinner = false;
    })
  }
  constructor(private req: RequestService){
    
  
    
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
}
 