import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoClientesComponent } from './catalogo-clientes.component';

describe('CatalogoClientesComponent', () => {
  let component: CatalogoClientesComponent;
  let fixture: ComponentFixture<CatalogoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
