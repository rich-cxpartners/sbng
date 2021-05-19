import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicCheckboxComponent } from './basic-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { configureTestSuite } from 'ng-bullet';

describe('BasicCheckboxComponent', () => {
  let component: BasicCheckboxComponent;
  let fixture: ComponentFixture<BasicCheckboxComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCheckboxComponent],
      imports: [MatCheckboxModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
