import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shw-basic-radio-button',
  templateUrl: './basic-radio-button.component.html',
  styleUrls: ['./basic-radio-button.component.scss']
})
export class BasicRadioButtonComponent implements OnInit {
  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = new FormGroup({
      radioButtonValue: new FormControl('1'),
    });
  }

}
