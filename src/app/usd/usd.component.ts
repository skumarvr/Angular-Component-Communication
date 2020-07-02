import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html'
})
export class USDComponent {
  @Input() usd: number;
  @Output() valueChange = new EventEmitter<number>();

  yenDisplayText: number;

  constructor() { 
  }

  convertToYen(newUsd) {
    // console.log('convertToYen within USDComponent : ' + newUsd);
    this.yenDisplayText = newUsd * 113;
    this.valueChange.emit(this.yenDisplayText);
  }

  getYenDisplayText() {
    return this.yenDisplayText;
  }
}
