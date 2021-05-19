import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicBannerComponent } from './basic-banner.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SbBannerModule } from '@sb/components';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BasicBannerComponent', () => {
  let component: BasicBannerComponent;
  let fixture: ComponentFixture<BasicBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BasicBannerComponent],
      imports: [MatIconModule, MatButtonModule, SbBannerModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
