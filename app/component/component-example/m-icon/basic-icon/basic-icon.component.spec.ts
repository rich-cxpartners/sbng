import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIconComponent } from './basic-icon.component';
import { MaterialIconModule } from '@modules/material.icon.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { configureTestSuite } from 'ng-bullet';

describe('BasicIconComponent', () => {
  let component: BasicIconComponent;
  let fixture: ComponentFixture<BasicIconComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicIconComponent],
      imports: [MaterialIconModule, HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
