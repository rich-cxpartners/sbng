import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shw-multiple-select',
  templateUrl: './multiple-select.component.html'
})
export class MultipleSelectComponent implements OnInit {

  cars = new FormControl();

  carList: Car[];

  constructor() {
    this.carList = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
  }

  ngOnInit() {
  }
}

export interface Car {
  value: string;
  label: string;
}
