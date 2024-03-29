import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patekphillipestore',
  templateUrl: './patekphillipestore.component.html',
  styleUrls: ['./patekphillipestore.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PatekphillipestoreComponent {
  @Input() collectionsPatekPhillipe: any = []
  general: boolean = true
}
