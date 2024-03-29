import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { RequestModS } from '../models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';

@Injectable({
  providedIn: 'root'
})
export class PatekphilippeservService {
  patekphilippecoll: any = []

  getDataPatekPhilippe(url: any){
    this.req.getData<RequestModS>(url).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        this.patekphilippecoll.push(res.cont[index])
      }
      // this.showSpinner = false;
    })
  }
  constructor(private req: RequestService) { }

  ngOnInit(){
    this.getDataPatekPhilippe(enviroenment.patekphillipe.grandcomplications.get)
  }
}
 