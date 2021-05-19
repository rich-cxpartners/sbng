import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomBannerComponent } from './custom-banner.component';
import { SbBannerModule } from '@sb/components';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('CustomBannerComponent', () => {
  let component: CustomBannerComponent;
  let fixture: ComponentFixture<CustomBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CustomBannerComponent],
      imports: [SbBannerModule, MatButtonModule, MatIconModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
