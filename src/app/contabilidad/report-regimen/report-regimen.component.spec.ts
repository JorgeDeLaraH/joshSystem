import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRegimenComponent } from './report-regimen.component';

describe('ReportRegimenComponent', () => {
  let component: ReportRegimenComponent;
  let fixture: ComponentFixture<ReportRegimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportRegimenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportRegimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
