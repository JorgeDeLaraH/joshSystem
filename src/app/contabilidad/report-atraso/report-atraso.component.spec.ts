import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAtrasoComponent } from './report-atraso.component';

describe('ReportAtrasoComponent', () => {
  let component: ReportAtrasoComponent;
  let fixture: ComponentFixture<ReportAtrasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportAtrasoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportAtrasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
