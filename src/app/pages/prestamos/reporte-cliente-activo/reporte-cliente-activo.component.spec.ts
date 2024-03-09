import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteActivoComponent } from './reporte-cliente-activo.component';

describe('ReporteClienteActivoComponent', () => {
  let component: ReporteClienteActivoComponent;
  let fixture: ComponentFixture<ReporteClienteActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteClienteActivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteClienteActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
