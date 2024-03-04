import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUltpagosComponent } from './report-ultpagos.component';

describe('ReportUltpagosComponent', () => {
  let component: ReportUltpagosComponent;
  let fixture: ComponentFixture<ReportUltpagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportUltpagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportUltpagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
