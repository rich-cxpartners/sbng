import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFooterComponent } from './basic-footer.component';
import { SbFooterModule } from '@sb/components';
import { MaterialIconModule } from '@modules/material.icon.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { configureTestSuite } from 'ng-bullet';

describe('BasicFooterComponent', () => {
  let component: BasicFooterComponent;
  let fixture: ComponentFixture<BasicFooterComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFooterComponent],
      imports: [MaterialIconModule, SbFooterModule, HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
