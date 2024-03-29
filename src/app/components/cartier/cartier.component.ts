import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { RequestModS } from 'src/app/models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';

@Component({
  selector: 'app-cartier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartier.component.html',
  styleUrls: ['./cartier.component.css']
})
export class CartierComponent {
  @Input() collectionsCartier: any = [];
  collectionsCartierAll: any = this.collectionsCartier;
  collectioncartierantosde: any = []
  collectioncartierpanterede: any = []
  collectioncartierballonde: any = []
  collectioncartierbaignoire: any = []
  collectuioncartierronde: any = []
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  constructor(private req: RequestService){

  }
  ngOnInit(){
    this.req.getData<RequestModS>(enviroenment.cartier.antosde.get).subscribe((res)=>{
      console.log(res);
      for (let index = 0; index < res.cont.length; index++) {
        this.collectioncartierantosde.push(res.cont[index])
      }   
      })
      this.req.getData<RequestModS>(enviroenment.cartier.panterede.get).subscribe((res)=>{
        console.log(res);
        for (let index = 0; index < res.cont.length; index++) {
          this.collectioncartierpanterede.push(res.cont[index])
        }   
        })
        this.req.getData<RequestModS>(enviroenment.cartier.ballonde.get).subscribe((res)=>{
          console.log(res);
          for (let index = 0; index < res.cont.length; index++) {
            this.collectioncartierballonde.push(res.cont[index])
          }   
          })
          this.req.getData<RequestModS>(enviroenment.cartier.baignoire.get).subscribe((res)=>{
            console.log(res);
            for (let index = 0; index < res.cont.length; index++) {
              this.collectioncartierbaignoire.push(res.cont[index])
            }   
            })
            this.req.getData<RequestModS>(enviroenment.cartier.ronde.get).subscribe((res)=>{
              console.log(res);
              for (let index = 0; index < res.cont.length; index++) {
                this.collectuioncartierronde.push(res.cont[index])
              }   
              })
      this.collectionsCartierAll = this.collectionsCartier;
  }
  show(num: number){
    if(num  == 1){
      this.collectionsCartierAll = this.collectionsCartier
    } else if(num  == 2){
      this.collectionsCartierAll = this.collectioncartierantosde
    } else if(num  == 3){
      this.collectionsCartierAll = this.collectioncartierpanterede
    } else if (num == 4) {
      this.collectionsCartierAll = this.collectioncartierballonde
    } else if (num == 5) {
      this.collectionsCartierAll = this.collectioncartierbaignoire
    } else {
      this.collectionsCartierAll = this.collectuioncartierronde
    }
  }
}
