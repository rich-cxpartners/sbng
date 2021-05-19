import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormItemComponent } from './select-form-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SbFormItemModule } from '@sb/components';
import { configureTestSuite } from 'ng-bullet';

describe('SelectFormItemComponent', () => {
  let component: SelectFormItemComponent;
  let fixture: ComponentFixture<SelectFormItemComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFormItemComponent],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        SbFormItemModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test error methods', () => {
    // Set a required error
    component.carForm.controls.car.setErrors({required: true});

    expect(component.getErrorMessage()).toEqual('You must enter a value');
    expect(component.getInformationMessage()).toEqual('This is an information message');
    expect(component.getWarningMessage()).toEqual('This is a warning message');

    // Remove all errors
    component.carForm.controls.car.setErrors(null);

    expect(component.getErrorMessage()).toEqual('');
    expect(component.getInformationMessage()).toEqual('');
    expect(component.getWarningMessage()).toEqual('');
  });
});
