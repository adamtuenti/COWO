import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazoniaComponent } from './amazonia.component';

describe('AmazoniaComponent', () => {
  let component: AmazoniaComponent;
  let fixture: ComponentFixture<AmazoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazoniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
