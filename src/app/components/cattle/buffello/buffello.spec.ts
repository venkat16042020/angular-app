import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Buffello } from './buffello';

describe('Buffello', () => {
  let fixture: ComponentFixture<Buffello>;
  let component: Buffello;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buffello],
    }).compileComponents();

    fixture = TestBed.createComponent(Buffello);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a QR checkout and place the order on phonepe payment', () => {
    component.cart = [
      { name: 'Milk', qty: 2, total: 90 },
      { name: 'Curd', qty: 1, total: 35 },
    ];

    component.checkout();

    expect(component.showCheckout).toBeTrue();
    expect(component.qrCodeText).toContain('PhonePe');
    expect(component.qrCodeImageUrl).toContain('qrserver');

    component.confirmPhonePay();

    expect(component.orderHistory.length).toBe(1);
    expect(component.orderHistory[0].status).toBe('Paid');
    expect(component.orderHistory[0].paymentMethod).toBe('PhonePe');
    expect(component.latestInvoice?.orderId).toBe(component.orderHistory[0].id);
    expect(component.showCheckout).toBeFalse();
  });
});
