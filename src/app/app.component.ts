import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    yenDisplayText : number;
    usdDisplayText : number;

    constructor() { }

    // Handle Usd Child component valueChange event
    updateUsd(newUsd) {
        // console.log('updateUsd : ' + newUsd);
        this.usdDisplayText = newUsd;
    }

    // Handle Yen Child component valueChange event
    updateYen(newYen) {
        // console.log('updateYen : ' + newYen);
        this.yenDisplayText = newYen;
    }
}
