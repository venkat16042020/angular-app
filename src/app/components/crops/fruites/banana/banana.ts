import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banana',
  imports: [MatButtonModule],
  templateUrl: './banana.html',
  styleUrl: './banana.css',
})
export class Banana {
  bananaCards = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: 'Banana',
    description: 'Banana works perfectly with Angular Material.',
  }));
}
