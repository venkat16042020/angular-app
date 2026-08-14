import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buffello',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './buffello.html',
  styleUrl: './buffello.css',
})
export class Buffello {
  buffelloCards = [
    { id: 1, title: 'Murrah Buffalo', description: 'High milk yield and strong dairy quality.' },
    { id: 2, title: 'Mehsana Buffalo', description: 'Known for milk production and adaptability.' },
    { id: 3, title: 'Jaffrabadi Buffalo', description: 'Large-sized breed with excellent milk output.' },
    { id: 4, title: 'Surti Buffalo', description: 'Balanced milk quality and disease resistance.' },
    { id: 5, title: 'Nagpuri Buffalo', description: 'Adapted well to tropical conditions and grazing.' },
    { id: 6, title: 'Bhadawari Buffalo', description: 'A hardy breed known for rich milk and resilience.' }
  ];
}
