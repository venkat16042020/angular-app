import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drip } from './drip';

describe('Drip', () => {
  let component: Drip;
  let fixture: ComponentFixture<Drip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drip],
    }).compileComponents();

    fixture = TestBed.createComponent(Drip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
