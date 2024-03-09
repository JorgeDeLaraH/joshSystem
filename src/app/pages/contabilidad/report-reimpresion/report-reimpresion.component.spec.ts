import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReimpresionComponent } from './report-reimpresion.component';

describe('ReportReimpresionComponent', () => {
  let component: ReportReimpresionComponent;
  let fixture: ComponentFixture<ReportReimpresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportReimpresionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportReimpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
