import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'shw-basic-messages',
  templateUrl: './basic-messages.component.html'
})
export class BasicMessagesComponent implements OnInit {

  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {
    this.msgs.push({ severity: 'success', detail: 'This is a message' });
  }

}
