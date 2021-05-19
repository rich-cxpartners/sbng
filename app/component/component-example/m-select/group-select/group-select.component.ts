import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shw-group-select',
  templateUrl: './group-select.component.html'
})
export class GroupSelectComponent {

  carControl = new FormControl();

  carGroups: CarGroup[];

  constructor() {
    this.carGroups = [
      {
        name: 'Audi',
        car: [
          { value: 'audi-a4', label: 'Audi A4' },
          { value: 'audi-a6', label: 'Audi A6' },
          { value: 'audi-r8', label: 'Audi R8' }
        ]
      },
      {
        name: 'Peugeot',
        car: [
          { value: 'peugeot-208', label: 'Peugeot 208' },
          { value: 'peugeot-308', label: 'Peugeot 308' },
          { value: 'peugeot-508', label: 'Peugeot 508' }
        ]
      },
      {
        name: 'Renault',
        disabled: true,
        car: [
          { value: 'renault-clio', label: 'Renault Clio' },
          { value: 'renault-kangoo', label: 'Renault Kangoo' },
          { value: 'renault-twingo', label: 'Renault Twingo' },
          { value: 'renault-zoe', label: 'Renault ZOE' }
        ]
      }
    ];
  }
}

export interface Car {
  value: string;
  label: string;
}

export interface CarGroup {
  disabled?: boolean;
  name: string;
  car: Car[];
}
