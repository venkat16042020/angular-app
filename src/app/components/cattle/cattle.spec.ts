import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cattle } from './cattle';

describe('Cattle', () => {
  let component: Cattle;
  let fixture: ComponentFixture<Cattle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cattle],
    }).compileComponents();

    fixture = TestBed.createComponent(Cattle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
