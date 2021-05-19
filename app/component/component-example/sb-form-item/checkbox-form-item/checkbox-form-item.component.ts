import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shw-checkbox-form-item',
  templateUrl: './checkbox-form-item.component.html'
})
export class CheckboxFormItemComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      checked: new FormControl('', [Validators.requiredTrue])
    });
  }
  getErrorMessage() {
    return this.userForm.controls.checked.hasError('required') ? 'You must validate the option' : '';
  }

  getInformationMessage() {
    return this.userForm.controls.checked.hasError('required') ? 'This is an information message' : '';
  }

  getWarningMessage() {
    return this.userForm.controls.checked.hasError('required') ? 'This is a warning message' : '';
  }
}
