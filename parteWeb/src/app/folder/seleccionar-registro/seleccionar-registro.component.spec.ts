import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarRegistroComponent } from './seleccionar-registro.component';

describe('SeleccionarRegistroComponent', () => {
  let component: SeleccionarRegistroComponent;
  let fixture: ComponentFixture<SeleccionarRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
