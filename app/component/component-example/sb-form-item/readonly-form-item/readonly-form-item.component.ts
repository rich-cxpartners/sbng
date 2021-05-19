import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shw-readonly-form-item',
  templateUrl: './readonly-form-item.component.html'
})
export class ReadonlyFormItemComponent implements OnInit {

  testLabelValue = 'Label value';

  ngOnInit(): void {
  }

}
