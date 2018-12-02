import * as Web3 from 'web3';
import { Injectable } from '@angular/core';
import { ConstantsService } from './app.constants';
declare global {
    interface Window { web3: any; }
}

window.web3 = window.web3 || {};

@Injectable()
export class Web3Service {
    web3: any;

    constructor(private constants: ConstantsService) {
        this.web3 = window.web3;
    }

    getWeb3() {
        return this.web3;
    }

    getAccounts() {
        return this.web3.eth.getAccounts();
    }

    getContract() {
        return new this.web3.eth.Contract(this.constants.abi, this.constants.address);
    }
}