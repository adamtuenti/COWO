import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCuentaVendedorComponent } from './nueva-cuenta-vendedor.component';

describe('NuevaCuentaVendedorComponent', () => {
  let component: NuevaCuentaVendedorComponent;
  let fixture: ComponentFixture<NuevaCuentaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaCuentaVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCuentaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
