import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabsComponent } from './basic-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule, MatTabGroup, MatTab } from '@angular/material/tabs';
import { By } from '@angular/platform-browser';
import { configureTestSuite } from 'ng-bullet';

describe('BasicTabsComponent', () => {
  let component: BasicTabsComponent;
  let fixture: ComponentFixture<BasicTabsComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTabsComponent],
      imports: [BrowserAnimationsModule, MatCardModule, MatTabsModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opening the second tab', () => {
    const matTabGroup: MatTabGroup =
      fixture.debugElement.query(By.css('mat-tab-group')).componentInstance;
    const tabs: MatTab[] = matTabGroup._tabs.toArray();

    expect(tabs[0].position).toBe(0);
    expect(tabs[1].position).toBeGreaterThan(0);
    expect(tabs[2].position).toBeGreaterThan(0);

    // Move to second tab
    matTabGroup.selectedIndex = 1;
    fixture.detectChanges();
    expect(tabs[0].position).toBeLessThan(0);
    expect(tabs[1].position).toBe(0);
    expect(tabs[2].position).toBeGreaterThan(0);

    fixture.whenStable().then(() => {
      const contentId = matTabGroup._getTabContentId(1);
      const tabBody = fixture.debugElement.query(By.css(`#${contentId}`)).nativeElement;
      expect(tabBody.textContent).toContain('Content of tab 2');
    });
  });
});
