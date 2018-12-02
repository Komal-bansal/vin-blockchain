import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
// declare let Web3: any;s
import { Web3Service } from './../../app.service';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  contract;
  no;
  name;
  phone;
  purchaseDate;
  address;
  web3;
  accounts: any;
  getNumber: any;
  owners = [];

  constructor(
    public webSerice: Web3Service
  ) {
    this.web3 = new Web3(window.web3.currentProvider);
  }

  ngOnInit() {
    this.contract = this.webSerice.getContract();
  }

  async addOwner() {
    if (this.purchaseDate) this.purchaseDate = this.purchaseDate.split('-').reverse().join('');
    this.accounts = await this.webSerice.getAccounts();
    await this.contract.methods.setowner(this.name, this.no, this.phone, this.purchaseDate, this.address, '').send({
      from: this.accounts[0]
    });
    alert('transaction confirmed');
  }

  async getD() {
    console.log(this.getNumber, 'get details')
    if (this.getNumber) {
      try {
        this.accounts = await this.webSerice.getAccounts();
        var i = 0;
        while (true) {
          var owner = await this.contract.methods.getowner(this.getNumber, i).call({
            from: this.accounts[0]
          })
          this.owners.push(owner);
          console.log(this.owners)
          i++;
        }
      } catch (e) {

      }
    } else {
      alert('enter car number to get owners')
    }

  }
}
