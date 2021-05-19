import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shw-basic-slide-toggle',
  templateUrl: './basic-slide-toggle.component.html'
})
export class BasicSlideToggleComponent implements OnInit {
  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = new FormGroup({
      slideToggleValue: new FormControl(true),
    });
  }

}
