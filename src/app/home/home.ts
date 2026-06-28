import { Component } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
keyUpHandler(event: KeyboardEvent) {
  console.log('Key up event triggered ' + `Key pressed: ${event.key}`);
}
}
