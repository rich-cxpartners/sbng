import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSelectComponent } from './basic-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { configureTestSuite } from 'ng-bullet';

describe('BasicSelectComponent', () => {
  let component: BasicSelectComponent;
  let fixture: ComponentFixture<BasicSelectComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicSelectComponent],
      imports: [BrowserAnimationsModule, MatSelectModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
