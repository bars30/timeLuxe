import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { Bestselled } from 'src/app/models/bestselled';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { RequestModS } from 'src/app/models/requestmodel';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  bestselledWatches !: Bestselled[];
  stupArray : RequestModS = {
    watches: "df",
    message: 'gyh'
  };
  constructor(private req: RequestService){
    
  }

  ngOnInit(){
    this.req.getData<RequestModS>('https://new2-mynl.onrender.com/api/bestselledwatches').subscribe((res)=>{
      console.log(res);
      this.stupArray = res;
      this.bestselledWatches = this.stupArray.watches
      console.log(this.bestselledWatches);
      
    })
  }
}
