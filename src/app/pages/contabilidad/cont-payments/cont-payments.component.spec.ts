import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContPaymentsComponent } from './cont-payments.component';

describe('ContPaymentsComponent', () => {
  let component: ContPaymentsComponent;
  let fixture: ComponentFixture<ContPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
