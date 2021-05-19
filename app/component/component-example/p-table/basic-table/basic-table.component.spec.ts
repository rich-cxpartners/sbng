import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTableComponent } from './basic-table.component';
import { TableModule } from 'primeng/table';
import { CarService } from '@services/carservice';
import { Observable } from 'rxjs';
import { configureTestSuite } from 'ng-bullet';

describe('BasicTableComponent', () => {
  let component: BasicTableComponent;
  let fixture: ComponentFixture<BasicTableComponent>;
  const CarServiceMock = jasmine.createSpyObj('CarService', ['getCarsSmall', 'getCarsMedium']);
  CarServiceMock.getCarsSmall.and.returnValue(
    new Observable((observer: { next: (arg0) => void; }) => {
      observer.next([]);
    })
  );
  CarServiceMock.getCarsMedium.and.returnValue(
    new Observable((observer: { next: (arg0) => void; }) => {
      observer.next([]);
    })
  );

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTableComponent],
      imports: [TableModule],
      providers: [{ provide: CarService, useValue: CarServiceMock }]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
