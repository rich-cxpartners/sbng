import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicSlideToggleComponent } from './basic-slide-toggle.component';

describe('BasicSlideToggleComponent', () => {
  let component: BasicSlideToggleComponent;
  let fixture: ComponentFixture<BasicSlideToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSlideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
