import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mango',
  imports: [MatButtonModule],
  templateUrl: './mango.html',
  styleUrl: './mango.css',
})
export class Mango {
  mangoCards = [
    { id: 1, title: 'Alphonso Mango', description: 'Sweet, rich, and highly aromatic with golden flesh.' },
    { id: 2, title: 'Kesar Mango', description: 'Known for its vibrant color and juicy sweetness.' },
    { id: 3, title: 'Dasheri Mango', description: 'A classic variety with luscious flavor and aroma.' },
    { id: 4, title: 'Langra Mango', description: 'Distinctive taste with a musky fragrance and soft texture.' },
    { id: 5, title: 'Banganapalli Mango', description: 'Large fruit with smooth pulp and a delightful taste.' },
    { id: 6, title: 'Totapuri Mango', description: 'Tangy and versatile, ideal for pickles and salads.' }
  ];
}
