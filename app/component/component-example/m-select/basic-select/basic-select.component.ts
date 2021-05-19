import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shw-basic-select',
  templateUrl: './basic-select.component.html'
})

export class BasicSelectComponent implements OnInit {

  carList: Car[];

  ngOnInit() {
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
}

export interface Car {
  value: string;
  label: string;
}
