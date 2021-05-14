import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumanoComponent } from './thumano.component';

describe('ThumanoComponent', () => {
  let component: ThumanoComponent;
  let fixture: ComponentFixture<ThumanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
