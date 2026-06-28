import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruites } from './fruites';

describe('Fruites', () => {
  let component: Fruites;
  let fixture: ComponentFixture<Fruites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruites],
    }).compileComponents();

    fixture = TestBed.createComponent(Fruites);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
