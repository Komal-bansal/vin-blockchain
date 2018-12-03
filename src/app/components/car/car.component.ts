import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
import { Web3Service } from '../../web3.service';
import { ToastService } from '../../toast.service';
import * as alertify from 'alertifyjs';
import { AppService } from '../../app.service';
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
  metamaskLoggedIn: Boolean;
  transactionLoader: Boolean;

  constructor(
    public webSerice: Web3Service,
    public toast: ToastService,
    public as: AppService
  ) {
    this.web3 = new Web3(window.web3.currentProvider);
  }

  ngOnInit() {
    this.contract = this.webSerice.getContract();
  }

  async addCarDetails() {
    this.transactionLoader = true;
    if (this.web3Installed()) {
      //if web3 is already installed 
      this.accounts = await this.webSerice.getAccounts();
      this.metamaskLoggedIn = this.accounts.length == 0 ? false : true;
      if (!this.metamaskLoggedIn) {
        this.toast.toastWarning('Please login to your metamask account to continue', '');
        this.transactionLoader = false;
      }
      if (this.metamaskLoggedIn)
        try {
          this.manufatureDate = this.manufatureDate.split('-').reverse().join('');
          let transaction = await this.contract.methods.setcarD(this.number, this.engineNo, this.chasisNo, this.color, this.manufatureDate, this.carManufacturer, this.carModel).send({
            from: this.accounts[0]
          });
          this.saveToDb();
          console.log(transaction)
          this.transactionLoader = false;
          this.showAlert(transaction.transactionHash);
        }
        catch (e) {
          this.toast.toastError('Transaction Failed', e);
          this.transactionLoader = false;
        }
    }
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

  web3Installed() {
    let html = '<a  class="link" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related?hl=en">Chrome Extension</a>, <a class="link" href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/">Mozilla Firefox Extension</a>'
    if (!window.web3.currentProvider) {
      this.toast.toastWarning(html, 'Please install metamask extension to continue')
      this.transactionLoader = false;
      return false;
    } else {
      return true;
    }
  }

  showAlert(hash) {
    alertify.alert()
      .setHeader('Transaction completed')
      .setting({
        'closableByDimmer': false,
        'movable': false,
        'message': `Your transaction hash is ${hash}. Click to view https://ropsten.etherscan.io/tx/${hash} <a href="https://ropsten.etherscan.io/tx/${hash}">Go to etherscan.io</a>`,
      }).show();
  }

  saveToDb() {
    let data = {
      Number: this.number,
      EngineNo: this.engineNo,
      chasisNo: this.chasisNo,
      color: this.color,
      ManufactureDate: this.manufatureDate,
      CarMake: this.carManufacturer,
      CarModel: this.carModel
    }
    this.as.setCar(data).subscribe(res => {
      console.log(res);
    })
  }
}
