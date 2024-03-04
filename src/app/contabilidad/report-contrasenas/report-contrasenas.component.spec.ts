import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportContrasenasComponent } from './report-contrasenas.component';

describe('ReportContrasenasComponent', () => {
  let component: ReportContrasenasComponent;
  let fixture: ComponentFixture<ReportContrasenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportContrasenasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportContrasenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
