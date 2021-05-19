import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFormItemComponent } from './datepicker-form-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SbFormItemModule } from '@sb/components';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { configureTestSuite } from 'ng-bullet';

describe('DatepickerFormItemComponent', () => {
  let component: DatepickerFormItemComponent;
  let fixture: ComponentFixture<DatepickerFormItemComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerFormItemComponent],
      imports: [
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        SbFormItemModule
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
