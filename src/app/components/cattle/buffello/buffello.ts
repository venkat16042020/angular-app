import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Product {
  name: string;
  price: number;
  unit: string;
}

interface CartItem {
  name: string;
  qty: number;
  total: number;
}

interface OrderRecord {
  id: string;
  items: CartItem[];
  total: number;
  paymentMethod: 'PhonePe';
  status: 'Paid';
  placedAt: string;
}

interface Invoice {
  orderId: string;
  createdAt: string;
  customerName: string;
  paymentMethod: 'PhonePe';
  items: CartItem[];
  total: number;
}

@Component({
  selector: 'app-buffello',
  standalone: true,
  imports: [FormsModule, MatButtonModule, DatePipe],
  templateUrl: './buffello.html',
  styleUrl: './buffello.css',
})
export class Buffello implements OnInit {
  products: Product[] = [
    { name: 'Milk', price: 45, unit: 'per liter' },
    { name: 'Curd', price: 35, unit: 'per kg' },
    { name: 'Ghee', price: 520, unit: 'per kg' },
  ];

  private readonly orderKey = 'buffello-order-history';
  private readonly invoiceKey = 'buffello-latest-invoice';

  selectedProduct = this.products[0];
  quantity = 1;
  cart: CartItem[] = [];
  showCheckout = false;
  qrCodeText = '';
  orderHistory: OrderRecord[] = [];
  latestInvoice: Invoice | null = null;
  phonePeUpi = '9876543210@ybl';
  customerName = 'Farm Fresh Customer';
  customerPhone = '';

  ngOnInit(): void {
    this.orderHistory = this.loadFromStorage<OrderRecord[]>(this.orderKey, []);
    this.latestInvoice = this.loadFromStorage<Invoice | null>(this.invoiceKey, null);
  }

  get currentItemTotal(): number {
    return this.selectedProduct.price * this.quantity;
  }

  addToCart() {
    const item: CartItem = {
      name: this.selectedProduct.name,
      qty: this.quantity,
      total: this.currentItemTotal,
    };

    this.cart.push(item);
    this.quantity = 1;
  }

  get cartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.total, 0);
  }

  checkout() {
    if (this.cart.length === 0) {
      console.log('Your cart is empty.');
      return;
    }

    const customerDisplayName = this.customerName.trim() || 'Farm Fresh Customer';
    this.qrCodeText = `Customer: ${customerDisplayName}\nPhone: ${this.customerPhone.trim() || 'Not provided'}\nPhonePe UPI: ${this.phonePeUpi}\nAmount to pay: ₹${this.cartTotal}`;
    this.showCheckout = true;
  }

  confirmPhonePay() {
    if (this.cart.length === 0) {
      this.showCheckout = false;
      return;
    }

    const orderId = `ORD-${Date.now()}`;
    const placedAt = new Date().toISOString();
    const order: OrderRecord = {
      id: orderId,
      items: [...this.cart],
      total: this.cartTotal,
      paymentMethod: 'PhonePe',
      status: 'Paid',
      placedAt,
    };

    const finalCustomerName = this.customerName.trim() || 'Farm Fresh Customer';
    this.orderHistory.unshift(order);
    this.latestInvoice = {
      orderId,
      createdAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      customerName: finalCustomerName,
      paymentMethod: 'PhonePe',
      items: [...this.cart],
      total: this.cartTotal,
    };

    this.saveToStorage(this.orderKey, this.orderHistory);
    this.saveToStorage(this.invoiceKey, this.latestInvoice);

    this.cart = [];
    this.showCheckout = false;
    console.log('Order placed successfully:', order);
  }

  printInvoice() {
    if (!this.latestInvoice) {
      return;
    }

    window.print();
  }

  private loadFromStorage<T>(key: string, fallback: T): T {
    if (typeof localStorage === 'undefined') {
      return fallback;
    }

    const value = localStorage.getItem(key);
    if (!value) {
      return fallback;
    }

    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }

  private saveToStorage<T>(key: string, value: T): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }
}


