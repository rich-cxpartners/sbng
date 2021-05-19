import { Component } from '@angular/core';

@Component({
  selector: 'shw-basic-dialog',
  templateUrl: './basic-dialog.component.html'
})
export class BasicDialogComponent {

  display = false;

  showDialog() {
      this.display = true;
  }
}
