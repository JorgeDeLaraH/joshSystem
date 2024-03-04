import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCatalogcontComponent } from './client-catalogcont.component';

describe('ClientCatalogcontComponent', () => {
  let component: ClientCatalogcontComponent;
  let fixture: ComponentFixture<ClientCatalogcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCatalogcontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCatalogcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
