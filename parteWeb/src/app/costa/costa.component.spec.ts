import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostaComponent } from './costa.component';

describe('CostaComponent', () => {
  let component: CostaComponent;
  let fixture: ComponentFixture<CostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
