import * as Web3 from 'web3';
import { Injectable } from '@angular/core';

declare global {
    interface Window { web3: any; }
}

window.web3 = window.web3 || {};

@Injectable()
export class Web3Service {
    address = '0xc56d59107a68724a89D10CD147AF3c06B313382a';
    abi = [{ "constant": false, "inputs": [{ "name": "Name", "type": "string" }, { "name": "Num", "type": "string" }, { "name": "phone", "type": "uint256" }, { "name": "PurchaseDate", "type": "uint32" }, { "name": "Address", "type": "string" }, { "name": "time", "type": "uint256" }], "name": "setowner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "Num", "type": "string" }], "name": "getcar", "outputs": [{ "name": "EngineNo", "type": "string" }, { "name": "chasisNo", "type": "string" }, { "name": "color", "type": "string" }, { "name": "ManufactureDate", "type": "uint32" }, { "name": "CarMake", "type": "string" }, { "name": "CarModel", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "Num", "type": "string" }, { "name": "EngineNo", "type": "string" }, { "name": "chasisNo", "type": "string" }, { "name": "color", "type": "string" }, { "name": "ManufactureDate", "type": "uint32" }, { "name": "CarMake", "type": "string" }, { "name": "CarModel", "type": "string" }], "name": "setcarD", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "Num", "type": "string" }, { "name": "index", "type": "uint256" }], "name": "getowner", "outputs": [{ "name": "Name", "type": "string" }, { "name": "phone", "type": "uint256" }, { "name": "PurchaseDate", "type": "uint256" }, { "name": "Address", "type": "string" }, { "name": "time", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }]
    web3: any;

    constructor() {
        this.web3 = window.web3;
    }

    getWeb3() {
        return this.web3;
    }

    getAccounts() {
        return this.web3.eth.getAccounts();
    }

    getContract() {
        return new this.web3.eth.Contract(this.abi, this.address)
    }
}