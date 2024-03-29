import { Injectable } from '@angular/core';
import { RequestModS } from '../models/requestmodel';
import { RequestService } from './request.service';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolexStoreService {
  private loadNextSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadNext$ = this.loadNextSubject.asObservable();



  collectionsRolex: any = []
  showSpinner: boolean = true;
  loadNext: boolean = false

  loadNum = 0;
  
  getDataRolex(url: any){
    this.req.getData<RequestModS>(url).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        res.cont[index].collection = res.watches[0].collection
        this.collectionsRolex.push(res.cont[index])
      }
      if(this.loadNum == 12){
        this.loadNextSubject.next(true)
      }
      this.loadNum++;
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
 