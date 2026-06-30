import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CropsService } from '../../services/crops';
import { Teams } from "../../teams/teams";

@Component({
  selector: 'app-crops',
  imports: [RouterLink, Teams],
  templateUrl: './crops.html',
  styleUrl: './crops.css',
  providers: [CropsService]
})
export class Crops {
  cropServiceData: any;
  productsDataFromApi: any;

  constructor(private cropsService: CropsService) {
    this.cropServiceData = this.cropsService.getCrops();
  }
}
