import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SbMenuItem } from '@sb/components';

@Component({
  selector: 'shw-basic-menu',
  templateUrl: './basic-menu.component.html',
  styleUrls: ['./basic-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicMenuComponent implements OnInit {

  menuModel: SbMenuItem[];

  ngOnInit() {
    this.menuModel = [
      {
        label: 'Page1',
        id: 'Page1Id',
        routerLink: ['/app/page1']
      },
      {
        label: 'Page2',
        disabled: true,
        routerLink: ['/app/page2']
      },
      {
        label: 'Pagehidden',
        hidden: true,
        routerLink: ['/app/pagehidden']
      },
      {
        label: 'ItemWithCss',
        styleClass: 'item-with-css',
        routerLink: ['/app/pageX']
      },
      {
        label: 'ItemWithCommand',
        command: () => { this.mycommand(); },
        routerLink: []
      },
      {
        label: 'SubPages',
        items: [
          {
            label: 'Subpage1',
            routerLink: ['/app/Subpage1']
          },
          {
            label: 'Subpage2',
            routerLink: ['/app/Subpage2']
          },
          {
            label: 'SubsubPages1',
            items: [
              {
                label: 'Subsubpage1',
                routerLink: ['/app/Subsubpage1']
              },
              {
                label: 'Subsubpage2',
                routerLink: ['/app/Subsubpage2']
              },
            ]
          },
          {
            label: 'SubsubPages2',
            disabled: true,
            items: [
              {
                label: 'Subsubpage1',
                routerLink: ['/app/Subsubpage1']
              },
              {
                label: 'Subsubpage2',
                routerLink: ['/app/Subsubpage2']
              },
            ]
          },
          { label: 'Subpage3' },
        ]
      },
      {
        label: 'Google',
        styleClass: 'google-item',
        url: 'https://www.google.com',
        target: '_blank'
      },
    ];
  }

  mycommand() {
    alert('command triggered');
  }

}
