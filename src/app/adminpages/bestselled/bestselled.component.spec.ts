import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestselledComponent } from './bestselled.component';

describe('BestselledComponent', () => {
  let component: BestselledComponent;
  let fixture: ComponentFixture<BestselledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BestselledComponent]
    });
    fixture = TestBed.createComponent(BestselledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
