import { Component, OnInit } from '@angular/core';
import { BannerInfo } from '@sb/components';

@Component({
  selector: 'shw-basic-banner',
  templateUrl: './basic-banner.component.html'
})
export class BasicBannerComponent implements OnInit {
  workareaMapInfo: Map<string, string>;
  info: BannerInfo;

  constructor() { }

  ngOnInit() {
    this.initBanner();
  }

  private initBanner() {
    this.workareaMapInfo = new Map();
    this.workareaMapInfo.set('Third party', 'M. Durant Stéphane');
    this.workareaMapInfo.set('Reference ID', '000209856985');
    this.workareaMapInfo.set('Activity', 'Golfer');
    this.workareaMapInfo.set('sdfPhonedf', '06 59 45 25 22');
    this.workareaMapInfo.set('Account Manager', 'M. Bernard Carlier');
    this.workareaMapInfo.set('Agency', 'Agence des mimosas');
    this.workareaMapInfo.set('Agency Phone', '04 55 88 78 52');

    this.info = {name: 'Firstname LASTNAME', company: 'NOCOM', role: 'NOPOS', date: '18/03/2020'};
  }

}
