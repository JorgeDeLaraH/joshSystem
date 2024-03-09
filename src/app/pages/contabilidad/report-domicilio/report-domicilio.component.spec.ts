import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDomicilioComponent } from './report-domicilio.component';

describe('ReportDomicilioComponent', () => {
  let component: ReportDomicilioComponent;
  let fixture: ComponentFixture<ReportDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportDomicilioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
