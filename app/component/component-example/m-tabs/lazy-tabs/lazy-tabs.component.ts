import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'shw-lazy-tabs',
  templateUrl: './lazy-tabs.component.html'
})
export class LazyTabsComponent implements OnInit {

  selectedIndex: number;
  tabs: Map<number, Observable<string>>;

  constructor() {
    this.selectedIndex = 0;
    this.tabs = new Map<number, Observable<string>>();
  }

  ngOnInit() {
    // Loading first tab
    this.loadTab();
  }

  changeTab(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
    this.loadTab();
  }

  loadTab(): void {
    if (this.tabs.get(this.selectedIndex) == null) {
      setTimeout(() => {
        this.tabs.set(this.selectedIndex, new Observable((observer: Observer<string>) => {
          observer.next(
            `Tab content ${this.selectedIndex + 1} loaded successfully !`
          );
        }));
      }, 3000);
    }
  }
}

export interface LazyTab {
  index: number;
  content: string;
}
