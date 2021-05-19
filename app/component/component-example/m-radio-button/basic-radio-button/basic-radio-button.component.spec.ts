import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicRadioButtonComponent } from './basic-radio-button.component';

describe('BasicRadioButtonComponent', () => {
  let component: BasicRadioButtonComponent;
  let fixture: ComponentFixture<BasicRadioButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
