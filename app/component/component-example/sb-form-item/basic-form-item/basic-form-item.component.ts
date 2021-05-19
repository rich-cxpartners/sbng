import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shw-basic-form-item',
  templateUrl: './basic-form-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BasicFormItemComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required])
    });
  }

  getErrorMessage() {
    return this.userForm.controls.firstName.hasError('required') ? 'You must enter a value' : '';
  }

  getInformationMessage() {
    return this.userForm.controls.firstName.hasError('required') ? 'This is an information message' : '';
  }

  getWarningMessage() {
    return this.userForm.controls.firstName.hasError('required') ? 'This is a warning message' : '';
  }
}
