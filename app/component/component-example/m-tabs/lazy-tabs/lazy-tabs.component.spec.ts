import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LazyTabsComponent } from './lazy-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule, MatTabGroup, MatTab } from '@angular/material/tabs';
import { By } from '@angular/platform-browser';
import { configureTestSuite } from 'ng-bullet';

describe('LazyTabsComponent', () => {
  let component: LazyTabsComponent;
  let fixture: ComponentFixture<LazyTabsComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [LazyTabsComponent],
      imports: [BrowserAnimationsModule, MatCardModule, MatTabsModule]
    });
  });

  it('should create', () => {
    fixture = TestBed.createComponent(LazyTabsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('opening the second tab', fakeAsync(() => {
    // Fixture and component must be set inside the fakeAsync otherwise component updates are missing
    fixture = TestBed.createComponent(LazyTabsComponent);
    fixture.detectChanges();

    const matTabGroup: MatTabGroup =
      fixture.debugElement.query(By.css('mat-tab-group')).componentInstance;
    const tabs: MatTab[] = matTabGroup._tabs.toArray();

    expect(tabs[0].position).toBe(0);
    expect(tabs[1].position).toBeGreaterThan(0);

    // Waiting async timeout to finish
    tick(4000);
    fixture.detectChanges();

    // Move to second tab
    matTabGroup.selectedIndex = 1;
    // Waiting async timeout to finish
    fixture.detectChanges();
    tick(4000);
    fixture.detectChanges();
    expect(tabs[0].position).toBeLessThan(0);
    expect(tabs[1].position).toBe(0);

    // Move to first tab again
    matTabGroup.selectedIndex = 0;
    // Waiting async timeout to finish
    fixture.detectChanges();
    tick(4000);
    fixture.detectChanges();
    expect(tabs[0].position).toBe(0);
    expect(tabs[1].position).toBeGreaterThan(0);
  }));

});
