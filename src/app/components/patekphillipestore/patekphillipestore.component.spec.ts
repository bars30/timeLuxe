import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatekphillipestoreComponent } from './patekphillipestore.component';

describe('PatekphillipestoreComponent', () => {
  let component: PatekphillipestoreComponent;
  let fixture: ComponentFixture<PatekphillipestoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatekphillipestoreComponent]
    });
    fixture = TestBed.createComponent(PatekphillipestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
