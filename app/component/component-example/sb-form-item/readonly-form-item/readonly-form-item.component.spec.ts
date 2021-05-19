import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyFormItemComponent } from './readonly-form-item.component';
import { SbFormItemModule } from '@sb/components';
import { configureTestSuite } from 'ng-bullet';

describe('ReadonlyFormItemComponent', () => {
  let component: ReadonlyFormItemComponent;
  let fixture: ComponentFixture<ReadonlyFormItemComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ReadonlyFormItemComponent],
      imports: [SbFormItemModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
