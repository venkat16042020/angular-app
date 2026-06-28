import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Revenueplants } from './revenueplants';

describe('Revenueplants', () => {
  let component: Revenueplants;
  let fixture: ComponentFixture<Revenueplants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Revenueplants],
    }).compileComponents();

    fixture = TestBed.createComponent(Revenueplants);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
