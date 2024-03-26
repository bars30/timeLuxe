import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolexStoreComponent } from './rolex-store.component';

describe('RolexStoreComponent', () => {
  let component: RolexStoreComponent;
  let fixture: ComponentFixture<RolexStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RolexStoreComponent]
    });
    fixture = TestBed.createComponent(RolexStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
