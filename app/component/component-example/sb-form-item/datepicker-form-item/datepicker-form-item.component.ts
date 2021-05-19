import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shw-datepicker-form-item',
  templateUrl: './datepicker-form-item.component.html'
})
export class DatepickerFormItemComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      date: new FormControl(new Date(''))
    });
  }

  getErrorMessage() {
    return 'You must enter a valid date';
  }

  getInformationMessage() {
    return 'This is an information message';
  }

  getWarningMessage() {
    return 'This is a warning message';
  }
}
