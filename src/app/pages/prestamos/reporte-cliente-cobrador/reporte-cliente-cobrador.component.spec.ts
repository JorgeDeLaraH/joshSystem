import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteCobradorComponent } from './reporte-cliente-cobrador.component';

describe('ReporteClienteCobradorComponent', () => {
  let component: ReporteClienteCobradorComponent;
  let fixture: ComponentFixture<ReporteClienteCobradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteClienteCobradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteClienteCobradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
