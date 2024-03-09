import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteAtrasoComponent } from './reporte-cliente-atraso.component';

describe('ReporteClienteAtrasoComponent', () => {
  let component: ReporteClienteAtrasoComponent;
  let fixture: ComponentFixture<ReporteClienteAtrasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteClienteAtrasoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteClienteAtrasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
