import { Component } from '@angular/core';

@Component({
  selector: 'shw-basic-checkbox',
  templateUrl: './basic-checkbox.component.html',
  styleUrls: ['./basic-checkbox.component.scss']
})
export class BasicCheckboxComponent {
  checkedCase1 = false;
  checkedCase2 = true;
  checkedCase3 = false;
  indeterminate = true;
}
