import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMenuComponent } from './basic-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SbMenuItem, SbMenuModule } from '@sb/components';
import { configureTestSuite } from 'ng-bullet';

describe('BasicMenuComponent', () => {
  let component: BasicMenuComponent;
  let fixture: ComponentFixture<BasicMenuComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicMenuComponent],
      imports: [
        SbMenuModule,
        RouterTestingModule.withRoutes([])
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test myCommand method', () => {
    spyOn(window, 'alert');
    const itemWithCommand: SbMenuItem = component.menuModel.find(x => x.label === 'ItemWithCommand');
    itemWithCommand.command.call(this);
    expect(window.alert).toHaveBeenCalledWith('command triggered');
  });
});
