import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shw-select-form-item',
  templateUrl: './select-form-item.component.html'
})
export class SelectFormItemComponent implements OnInit {
  carForm: FormGroup;

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

    this.initForm();
  }

  private initForm() {
    this.carForm = new FormGroup({
      car: new FormControl('', [Validators.required])
    });
  }

  getErrorMessage() {
    return this.carForm.controls.car.hasError('required') ? 'You must enter a value' : '';
  }

  getInformationMessage() {
    return this.carForm.controls.car.hasError('required') ? 'This is an information message' : '';
  }

  getWarningMessage() {
    return this.carForm.controls.car.hasError('required') ? 'This is a warning message' : '';
  }
}

export interface Car {
  value: string;
  label: string;
}
