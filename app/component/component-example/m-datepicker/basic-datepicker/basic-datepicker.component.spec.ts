import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatepickerComponent } from './basic-datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { configureTestSuite } from 'ng-bullet';

describe('BasicDatepickerComponent', () => {
  let component: BasicDatepickerComponent;
  let fixture: ComponentFixture<BasicDatepickerComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicDatepickerComponent],
      imports: [
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        ReactiveFormsModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
