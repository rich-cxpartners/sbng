import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shw-basic-datepicker',
  templateUrl: './basic-datepicker.component.html'
})
export class BasicDatepickerComponent {

  date = new FormControl(new Date());

}


