import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPorClienteComponent } from './pago-por-cliente.component';

describe('PagoPorClienteComponent', () => {
  let component: PagoPorClienteComponent;
  let fixture: ComponentFixture<PagoPorClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoPorClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
