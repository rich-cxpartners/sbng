import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormItemComponent } from './basic-form-item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SbFormItemModule } from '@sb/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { configureTestSuite } from 'ng-bullet';

describe('BasicFormItemComponent', () => {
  let component: BasicFormItemComponent;
  let fixture: ComponentFixture<BasicFormItemComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormItemComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SbFormItemModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test error methods', () => {
    // Set a required error
    component.userForm.controls.firstName.setErrors({required: true});

    expect(component.getErrorMessage()).toEqual('You must enter a value');
    expect(component.getInformationMessage()).toEqual('This is an information message');
    expect(component.getWarningMessage()).toEqual('This is a warning message');

    // Remove all errors
    component.userForm.controls.firstName.setErrors(null);

    expect(component.getErrorMessage()).toEqual('');
    expect(component.getInformationMessage()).toEqual('');
    expect(component.getWarningMessage()).toEqual('');
  });
});
