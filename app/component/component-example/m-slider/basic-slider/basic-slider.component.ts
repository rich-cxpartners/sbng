import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shw-basic-slider',
  templateUrl: './basic-slider.component.html',
  styleUrls: ['./basic-slider.component.scss']
})
export class BasicSliderComponent implements OnInit {
  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = new FormGroup({
      sliderValue: new FormControl(3),
    });
  }

}
