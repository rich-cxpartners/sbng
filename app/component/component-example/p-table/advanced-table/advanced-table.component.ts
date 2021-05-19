import { Component, OnInit } from '@angular/core';
import { CarService } from '@services/carservice';
import { Car } from '@models/interface/car';

@Component({
  selector: 'shw-advanced-table',
  templateUrl: './advanced-table.component.html'
})
export class AdvancedTableComponent implements OnInit {

  cars: Car[];

  cols: any[];

  selectedCar: Car;

  constructor(private readonly carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().subscribe(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }
}
