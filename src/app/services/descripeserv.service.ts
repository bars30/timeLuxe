import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DescripeservService {
  showDiscoverComp: boolean = false;
  constructor(private router: Router) { }
  discoverInputObject = {
    id: '',
    coll: '',
    model: '',
    img: '',
    href: '',
  }
  openDescribe(id : any, collection: any, model: any, img: any, href: any ){
    this.discoverInputObject.id = id;
    this.discoverInputObject.coll = collection;
    this.discoverInputObject.model = model;
    this.discoverInputObject.img = img;
    this.discoverInputObject.href = href;
    this.showDiscoverComp = true;
  }
  closeDiscoverComp(){
    this.showDiscoverComp = false;
    this.router.navigate(['/store']);
  }
}
