import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
    address = '0x4a5070dfd4e23d5cc3f48bb6de3564ff872be72e';
    abi = [{
        "constant": true, "inputs": [], "name": "creationTime", "outputs": [{
            "name": "", "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "Num",
                "type": "string"
            },
            {
                "name": "EngineNo",
                "type": "string"
            },
            {
                "name": "chasisNo",
                "type": "string"
            },
            {
                "name": "color",
                "type": "string"
            },
            {
                "name": "ManufactureDate",
                "type": "uint32"
            },
            {
                "name": "CarMake",
                "type": "string"
            },
            {
                "name": "CarModel",
                "type": "string"
            }
        ],
        "name": "setcarD",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "Name",
                "type": "string"
            },
            {
                "name": "Num",
                "type": "string"
            },
            {
                "name": "phone",
                "type": "uint256"
            },
            {
                "name": "PurchaseDate",
                "type": "uint32"
            },
            {
                "name": "Address",
                "type": "string"
            },
            {
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "setowner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "Num",
                "type": "string"
            }
        ],
        "name": "getcar",
        "outputs": [
            {
                "name": "EngineNo",
                "type": "string"
            },
            {
                "name": "chasisNo",
                "type": "string"
            },
            {
                "name": "color",
                "type": "string"
            },
            {
                "name": "ManufactureDate",
                "type": "uint32"
            },
            {
                "name": "CarMake",
                "type": "string"
            },
            {
                "name": "CarModel",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "Num",
                "type": "string"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getowner",
        "outputs": [
            {
                "name": "Name",
                "type": "string"
            },
            {
                "name": "phone",
                "type": "uint256"
            },
            {
                "name": "PurchaseDate",
                "type": "uint256"
            },
            {
                "name": "Address",
                "type": "string"
            },
            {
                "name": "time",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
    ];

    baseUrl = 'https://vinbo.herokuapp.com/'
}