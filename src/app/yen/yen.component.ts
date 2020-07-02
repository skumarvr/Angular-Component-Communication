import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html'
})
export class YenComponent {
  @Output() valueChange = new EventEmitter<number>();
  @Input() yen: number;

  usdDisplayText: number;
  constructor() { 
  }

  convertToUsd(newYen) {
    this.usdDisplayText = newYen * 0.0088;
    this.valueChange.emit(this.usdDisplayText);
  }

  getUsdDisplayText() {
    return this.usdDisplayText.toString();
  }
}
