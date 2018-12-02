import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
import { Web3Service } from './../../app.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  web3;
  contract;
  accounts;
  carModel = ''; carManufacturer = ' ';
  manufatureDate: any;
  color: string;
  chasisNo: string;
  engineNo: string;
  number: string;
  getNumber: string;
  constructor(
    public webSerice: Web3Service
  ) {
    this.web3 = new Web3(window.web3.currentProvider);
  }

  ngOnInit() {
    this.contract = this.webSerice.getContract();
  }

  async addCarDetails() {
    if (this.manufatureDate) this.manufatureDate = this.manufatureDate.split('-').reverse().join('');
    this.accounts = await this.webSerice.getAccounts();
    await this.contract.methods.setcarD(this.number, this.engineNo, this.chasisNo, this.color, this.manufatureDate, this.carManufacturer, this.carModel).send({
      from: this.accounts[0]
    });
  }

  async getCarD() {
    this.accounts = await this.webSerice.getAccounts();
    console.log(this.accounts[0])
    if (this.getNumber) {
      var r = await this.contract.methods.getcar(this.getNumber).call({
        from: this.accounts[0]
      });
      console.log(r);
    } else {
      alert('enter car number to get details ');
    }
  }
}
