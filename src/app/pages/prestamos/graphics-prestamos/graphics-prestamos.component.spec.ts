import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsPrestamosComponent } from './graphics-prestamos.component';

describe('GraphicsPrestamosComponent', () => {
  let component: GraphicsPrestamosComponent;
  let fixture: ComponentFixture<GraphicsPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsPrestamosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicsPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
