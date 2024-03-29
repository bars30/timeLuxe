import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jaeger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jaeger.component.html',
  styleUrls: ['./jaeger.component.css']
})
export class JaegerComponent {
  @Input() collectionsJaeger: any = []
  collectionsJaegerAll: any = []

  ngOnInit(){
    this.collectionsJaegerAll = this.collectionsJaeger
  }
  show(num: number){
    if(num  == 1){
      
    } else if(num  == 2){
      
    } else if(num  == 3){
      
    } else {
      
    }
  }
} 
