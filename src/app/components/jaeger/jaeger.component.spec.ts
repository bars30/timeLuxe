import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaegerComponent } from './jaeger.component';

describe('JaegerComponent', () => {
  let component: JaegerComponent;
  let fixture: ComponentFixture<JaegerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JaegerComponent]
    });
    fixture = TestBed.createComponent(JaegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
