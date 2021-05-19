import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSelectComponent } from './group-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { configureTestSuite } from 'ng-bullet';

describe('GroupSelectComponent', () => {
  let component: GroupSelectComponent;
  let fixture: ComponentFixture<GroupSelectComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [GroupSelectComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MatSelectModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
