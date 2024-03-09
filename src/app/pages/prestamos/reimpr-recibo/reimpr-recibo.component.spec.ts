import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimprReciboComponent } from './reimpr-recibo.component';

describe('ReimprReciboComponent', () => {
  let component: ReimprReciboComponent;
  let fixture: ComponentFixture<ReimprReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReimprReciboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReimprReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
