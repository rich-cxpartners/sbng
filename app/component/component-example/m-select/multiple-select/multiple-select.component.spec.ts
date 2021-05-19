import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectComponent } from './multiple-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { configureTestSuite } from 'ng-bullet';

describe('MultipleSelectComponent', () => {
  let component: MultipleSelectComponent;
  let fixture: ComponentFixture<MultipleSelectComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleSelectComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MatSelectModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
