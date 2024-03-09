import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCobrarDiarioComponent } from './reporte-cobrar-diario.component';

describe('ReporteCobrarDiarioComponent', () => {
  let component: ReporteCobrarDiarioComponent;
  let fixture: ComponentFixture<ReporteCobrarDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteCobrarDiarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteCobrarDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
