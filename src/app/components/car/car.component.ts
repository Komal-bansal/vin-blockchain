import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
import { Web3Service } from '../../providers/web3.service';
import { ToastService } from '../../providers/toast.service';
import * as alertify from 'alertifyjs';
import { AppService } from '../../providers/app.service';
import * as web3 from 'web3';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  web3;
  contract;
  accounts;
  carModel = ''; carMake = ' ';
  manufatureDate: any;
  color: string;
  chasisNo: string;
  engineNo: string;
  number: string;
  getNumber: string;
  metamaskLoggedIn: Boolean;
  transactionLoader: Boolean;
  vehicles: any;
  selectedBrand: any;
  models: any;
  today: any;
  search = false;
  carNo = '';
  carDetails: any;
  constructor(
    public webSerice: Web3Service,
    public toast: ToastService,
    public as: AppService
  ) {
    this.web3 = new Web3(window.web3.currentProvider);
  }

  ngOnInit() {
    this.contract = this.webSerice.getContract();
    this.getVehicle();
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
          let transaction = await this.contract.methods.setcarD(this.number, this.engineNo, this.chasisNo, this.color, this.manufatureDate, this.carMake, this.carModel).send({
            from: this.accounts[0]
          });
          this.saveToDb();
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
      CarMake: this.carMake,
      CarModel: this.carModel
    }
    this.as.setCar(data).subscribe(res => {
    })
  }

  getVehicle() {
    this.as.getVehicles().subscribe((res: any) => {
      this.vehicles = res.result;
    })
  }

  selectBrand(e) {
    this.selectedBrand = e;
    this.models = this.vehicles.filter(vehicle => vehicle.brand == this.selectedBrand);
    this.models = this.models[0].model;
  }

  // disable editing date in html on keydown
  disableKey = (e: any) => {
    if (e) {
      return false;
    }
  }

  getToday = () => {
    this.today = new Date().toISOString().slice(0, 10);
    return this.today;
  }
  getLoader: boolean;

  async getCar() {
    if (this.carNo) {
      this.search = true;
      this.getLoader = true;
      this.accounts = await this.webSerice.getAccounts();
      this.carDetails = await this.contract.methods.getcar(this.carNo).call({
        from: this.accounts[0]
      });
      this.getLoader = false;
    }
  }

}

}
