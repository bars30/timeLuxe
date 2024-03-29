import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudemarsPiguetComponent } from './audemars-piguet.component';

describe('AudemarsPiguetComponent', () => {
  let component: AudemarsPiguetComponent;
  let fixture: ComponentFixture<AudemarsPiguetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AudemarsPiguetComponent]
    });
    fixture = TestBed.createComponent(AudemarsPiguetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
