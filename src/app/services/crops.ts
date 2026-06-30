import { Service } from '@angular/core';
import { Crop } from '../model/crops/crop.type';

@Service()
export class CropsService {
corps : Array<Crop>= [
    { id: 1, name: 'Wheat', description: 'A cereal grain used for making flour.' },
    { id: 2, name: 'Corn', description: 'A versatile crop used for food and fuel.' },
    { id: 3, name: 'Rice', description: 'A staple food for a large part of the world\'s population.' },
    { id: 4, name: 'Soybeans', description: 'A legume used for oil and protein products.' },
    { id: 5, name: 'Barley', description: 'A cereal grain used in brewing and animal feed.' }
  ];

  constructor() {}
  getCrops() {
    return this.corps;
  }

}
