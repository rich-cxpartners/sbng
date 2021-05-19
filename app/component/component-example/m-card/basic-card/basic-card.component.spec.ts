import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCardComponent } from './basic-card.component';
import { MatCardModule } from '@angular/material/card';
import { configureTestSuite } from 'ng-bullet';

describe('BasicCardComponent', () => {
  let component: BasicCardComponent;
  let fixture: ComponentFixture<BasicCardComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCardComponent],
      imports: [MatCardModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
