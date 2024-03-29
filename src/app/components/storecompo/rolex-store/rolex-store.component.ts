import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolexStoreService } from 'src/app/services/rolex-store.service';
import { RequestService } from 'src/app/services/request.service';
import { RequestModS } from 'src/app/models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-rolex-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rolex-store.component.html',
  styleUrls: ['./rolex-store.component.css']
})
export class RolexStoreComponent {
  @Input() collectionsRolex: any = []
  showSpinner: boolean = false;

  constructor(private req: RequestService){}

  // ngOnInit(){
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex['1908'].get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.skydweller.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.adydatejust.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.explorer.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.airking.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.deepsea.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.seadweller.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.yachtmaster.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.oysterperpetual.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.cosmographdaytona.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.daydate.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.gmtmasterll.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.submariner.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })
  //   this.req.getData<RequestModS>(enviroenment.collection.rolex.datejust.get).subscribe((res)=>{
  //     console.log(res);
  //     for (let index = 0; index < res.cont.length; index++) {
  //       res.cont[index].collection = res.watches[0].collection
  //       this.collectionsRolex.push(res.cont[index])
  //     }
  //     this.showSpinner = false;
  //   })

  // }
} 
 