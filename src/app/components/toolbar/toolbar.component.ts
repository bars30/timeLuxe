import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class ToolbarComponent {
  showSpan: boolean = true;
  menuVariable: Boolean = false;
  nav!: HTMLElement;
  firstSpan!: HTMLSpanElement;
  thirdSpan!: HTMLSpanElement;
  menuIcon!: HTMLDivElement;
  showA = false; // Initialize showA to false

  showMenu(nav: HTMLElement, firstSpan: HTMLSpanElement, thirdSpan: HTMLSpanElement, menuIcon: HTMLDivElement){
    this.menuVariable =! this.menuVariable;
    this.showSpan =! this.showSpan;
    this.nav = nav;
    this.firstSpan = firstSpan;
    this.thirdSpan = thirdSpan;
    this.menuIcon = menuIcon;
    if(this.menuVariable){
      firstSpan.classList.add('spanRotate1');
      thirdSpan.classList.add('spanRotate2');
      menuIcon.classList.add('iconPadding');
      this.showA = true; // Set showA to true when menu is clicked
    } else {
      this.close();
    }
  }

  close(){
    this.menuVariable = false
    this.showSpan = true;
  }

  closeMenu(){
    console.log('closeeeeeeeeeeeee');
    console.log('this.menuVariable ->' + this.menuVariable);
    
    if(this.menuVariable == false){
      return
    }
    this.menuVariable = false;
    this.showSpan = true;
  }
}
