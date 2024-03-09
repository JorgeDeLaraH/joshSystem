import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteCobrador1Component } from './reporte-cliente-cobrador-1.component';

describe('ReporteClienteCobrador1Component', () => {
  let component: ReporteClienteCobrador1Component;
  let fixture: ComponentFixture<ReporteClienteCobrador1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteClienteCobrador1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteClienteCobrador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
