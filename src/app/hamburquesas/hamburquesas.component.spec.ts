import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburquesasComponent } from './hamburquesas.component';

describe('HamburquesasComponent', () => {
  let component: HamburquesasComponent;
  let fixture: ComponentFixture<HamburquesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburquesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburquesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
