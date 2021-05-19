import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEpComponent } from './basic-ep.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { configureTestSuite } from 'ng-bullet';

describe('BasicEpComponent', () => {
  let component: BasicEpComponent;
  let fixture: ComponentFixture<BasicEpComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEpComponent],
      imports: [BrowserAnimationsModule, MatExpansionModule, ReactiveFormsModule, MatInputModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
