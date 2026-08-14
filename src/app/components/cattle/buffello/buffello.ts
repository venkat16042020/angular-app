import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Product {
  name: string;
  price: number;
  unit: string;
}

@Component({
  selector: 'app-buffello',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './buffello.html',
  styleUrl: './buffello.css',
})
export class Buffello {
  products: Product[] = [
    { name: 'Milk', price: 45, unit: 'per liter' },
    { name: 'Curd', price: 35, unit: 'per kg' },
    { name: 'Ghee', price: 520, unit: 'per kg' }
  ];

  selectedProduct = this.products[0];
  quantity = 1;
  cart: { name: string; qty: number; total: number }[] = [];

  get currentItemTotal(): number {
    return this.selectedProduct.price * this.quantity;
  }

  addToCart() {
    const item = {
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

    console.log('Checkout cart:', this.cart);
    console.log('Total payable: ₹' + this.cartTotal);
  }
}


