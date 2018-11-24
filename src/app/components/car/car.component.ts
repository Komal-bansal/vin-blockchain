import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
// declare let Web3: any;s
import { Web3Service } from './../../app.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  web3;
  abi = [{ "constant": false, "inputs": [{ "name": "Name", "type": "string" }, { "name": "Num", "type": "string" }, { "name": "phone", "type": "uint256" }, { "name": "PurchaseDate", "type": "uint32" }, { "name": "Address", "type": "string" }, { "name": "time", "type": "uint256" }], "name": "setowner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "Num", "type": "string" }], "name": "getcar", "outputs": [{ "name": "EngineNo", "type": "string" }, { "name": "chasisNo", "type": "string" }, { "name": "color", "type": "string" }, { "name": "ManufactureDate", "type": "uint32" }, { "name": "CarMake", "type": "string" }, { "name": "CarModel", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "Num", "type": "string" }, { "name": "EngineNo", "type": "string" }, { "name": "chasisNo", "type": "string" }, { "name": "color", "type": "string" }, { "name": "ManufactureDate", "type": "uint32" }, { "name": "CarMake", "type": "string" }, { "name": "CarModel", "type": "string" }], "name": "setcarD", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "Num", "type": "string" }, { "name": "index", "type": "uint256" }], "name": "getowner", "outputs": [{ "name": "Name", "type": "string" }, { "name": "phone", "type": "uint256" }, { "name": "PurchaseDate", "type": "uint256" }, { "name": "Address", "type": "string" }, { "name": "time", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];
  address = '0xA04B832ACbA448DB386871370AADA22F8321DA9c';
  contract;
  accounts;
  constructor(
    public webSerice: Web3Service
  ) {
    this.web3 = new Web3(window.web3.currentProvider);
  }

  ngOnInit() {
    this.accounts = this.getAccounts();
    this.contract = this.webSerice.getContract();
    this.setCar();
  }


  async setCar() {
    this.accounts = await this.webSerice.getAccounts();
    console.log(this.accounts[0])
    var a = await this.contract.methods.getcar('1').send({
      from: this.accounts[0]
    });
    console.log(a);
  }

  async getAccounts() {
    return await this.webSerice.getAccounts();
  }
}
