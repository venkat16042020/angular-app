import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  currentCount = signal(0);
Reset() {
  this.currentCount.set(0);
  console.log('Reset button clicked');
}
Decrement() {
  this.currentCount.update((value) => value - 1);
  console.log('Decrement button clicked');
}
Increment() {
  this.currentCount.update((value) => value + 1);
  console.log('Increment button clicked');
}
keyUpHandler(event: KeyboardEvent) {
  console.log('Key up event triggered ' + `Key pressed: ${event.key}`);
}
}
