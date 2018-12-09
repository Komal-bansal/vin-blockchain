import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
import { Web3Service } from '../../providers/web3.service';
import { ToastService } from '../../providers/toast.service';
import * as alertify from 'alertifyjs';
import { AppService } from '../../providers/app.service';
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
  transactionLoader: Boolean;
  metamaskLoggedIn: Boolean;
  today: any;
  carNo: any;
  search = false;
  owners: any;
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

  async addOwner() {
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
          this.purchaseDate = this.purchaseDate.split('-').reverse().join('');
          let transaction = await this.contract.methods.setowner(this.name, this.no, this.phone, this.purchaseDate, this.address, '').send({
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
      Name: this.name,
      Num: this.no,
      phone: this.phone,
      Address: this.address,
      PurchaseDate: this.purchaseDate
    }
    this.as.setOwner(data).subscribe(res => {
    })
  }

  disableKey = (e: any) => {
    if (e) {
      return false;
    }
  }

  getToday = () => {
    this.today = new Date().toISOString().slice(0, 10);
    return this.today;
  }
  getLoader = false;
  async getOwners() {
    if (this.carNo) {
      this.search = true;
      this.getLoader = true;
      try {
        this.accounts = await this.webSerice.getAccounts();
        let i = 0;
        while (true) {
          var owner = await this.contract.methods.getowner(this.carNo, i).call({
            from: this.accounts[0]
          })
          this.getLoader = false;
          this.owners.push(owner);
          i++;
        }
      } catch (e) {
        this.getLoader = false
      }
    }
  }


}
