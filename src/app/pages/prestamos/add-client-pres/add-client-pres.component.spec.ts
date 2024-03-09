import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientPresComponent } from './add-client-pres.component';

describe('AddClientPresComponent', () => {
  let component: AddClientPresComponent;
  let fixture: ComponentFixture<AddClientPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClientPresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClientPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
