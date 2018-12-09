import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../../providers/web3.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-owner-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
}) export class OwnerViewComponent implements OnInit {
    number: any;
    accounts: any;
    contract: any;
    owners = [];
    loader: Boolean;
    constructor(public web3S: Web3Service, public route: ActivatedRoute) {

    }
    ngOnInit() {
        this.contract = this.web3S.getContract();
        this.number = this.route.snapshot.params.id;
        this.getOwners();
    }

    async getOwners() {
        this.loader = true;
        if (this.number) {
            try {
                this.accounts = await this.web3S.getAccounts();
                var i = 0;
                while (true) {
                    var owner = await this.contract.methods.getowner(this.number, i).call({
                        from: this.accounts[0]
                    })
                    this.owners.push(owner);
                    i++;
                }
            } catch (e) {
                this.loader = false;
            }
        } else {
            alert('enter car number to get owners')
        }

    }
}