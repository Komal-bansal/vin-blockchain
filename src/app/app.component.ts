import { Component } from '@angular/core';
import * as web3 from 'web3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Web3;
  constructor() {
    this.Web3 = new web3(web3.currentProvider);
  }

}
