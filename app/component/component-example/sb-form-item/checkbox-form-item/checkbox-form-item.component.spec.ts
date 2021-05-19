import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFormItemComponent } from './checkbox-form-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SbFormItemModule } from '@sb/components';
import { configureTestSuite } from 'ng-bullet';

describe('CheckboxFormItemComponent', () => {
  let component: CheckboxFormItemComponent;
  let fixture: ComponentFixture<CheckboxFormItemComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxFormItemComponent],
      imports: [
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        SbFormItemModule
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test error methods', () => {
    // Set a required error
    component.userForm.controls.checked.setErrors({required: true});

    expect(component.getErrorMessage()).toEqual('You must validate the option');
    expect(component.getInformationMessage()).toEqual('This is an information message');
    expect(component.getWarningMessage()).toEqual('This is a warning message');

    // Remove all errors
    component.userForm.controls.checked.setErrors(null);

    expect(component.getErrorMessage()).toEqual('');
    expect(component.getInformationMessage()).toEqual('');
    expect(component.getWarningMessage()).toEqual('');
  });
});
