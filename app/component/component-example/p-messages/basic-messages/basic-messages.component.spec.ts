import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMessagesComponent } from './basic-messages.component';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { configureTestSuite } from 'ng-bullet';

describe('BasicMessagesComponent', () => {
  let component: BasicMessagesComponent;
  let fixture: ComponentFixture<BasicMessagesComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicMessagesComponent],
      imports: [BrowserAnimationsModule, MatCardModule, MessagesModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
