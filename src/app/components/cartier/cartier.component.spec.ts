import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartierComponent } from './cartier.component';

describe('CartierComponent', () => {
  let component: CartierComponent;
  let fixture: ComponentFixture<CartierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartierComponent]
    });
    fixture = TestBed.createComponent(CartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
