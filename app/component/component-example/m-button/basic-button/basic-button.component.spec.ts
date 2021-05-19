import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicButtonComponent } from './basic-button.component';
import { configureTestSuite } from 'ng-bullet';

describe('BasicButtonComponent', () => {
  let component: BasicButtonComponent;
  let fixture: ComponentFixture<BasicButtonComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicButtonComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
