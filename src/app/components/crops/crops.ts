import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CropsService } from '../../services/crops';

@Component({
  selector: 'app-crops',
  imports: [RouterLink],
  templateUrl: './crops.html',
  styleUrl: './crops.css',
  providers: [CropsService]
})
export class Crops {
  cropServiceData: any;

  constructor(private cropsService: CropsService) {
    this.cropServiceData = this.cropsService.getCrops();
  }
}
