import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDialogComponent } from './basic-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { configureTestSuite } from 'ng-bullet';


describe('BasicDialogComponent', () => {
  let component: BasicDialogComponent;
  let fixture: ComponentFixture<BasicDialogComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDialogComponent ],
      imports: [BrowserAnimationsModule, DialogModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function showDialog', () => {
    expect(component.display).toBe(false, 'Dialog not displayed first');
    component.showDialog();
    expect(component.display).toBe(true, 'Dialog must be displayed now');
  });

  it('"showDialog" activation and check dialog is displayed', () => {
    component.showDialog();
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement.query(By.css('.p-dialog'));
    expect(debugElement).not.toBeNull('Dialog is expected to be present in DOM at this point.');
  });

});
