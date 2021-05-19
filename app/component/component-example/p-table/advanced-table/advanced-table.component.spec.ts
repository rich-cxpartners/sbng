import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTableComponent } from './advanced-table.component';
import { TableModule } from 'primeng/table';
import { CarService } from '@services/carservice';
import { Observable } from 'rxjs';
import { configureTestSuite } from 'ng-bullet';

describe('AdvancedTableComponent', () => {
  let component: AdvancedTableComponent;
  let fixture: ComponentFixture<AdvancedTableComponent>;
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
      declarations: [AdvancedTableComponent],
      imports: [TableModule],
      providers: [{ provide: CarService, useValue: CarServiceMock }]

    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
