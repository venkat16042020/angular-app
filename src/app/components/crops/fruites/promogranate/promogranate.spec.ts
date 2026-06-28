import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Promogranate } from './promogranate';

describe('Promogranate', () => {
  let component: Promogranate;
  let fixture: ComponentFixture<Promogranate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Promogranate],
    }).compileComponents();

    fixture = TestBed.createComponent(Promogranate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
