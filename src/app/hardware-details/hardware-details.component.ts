import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './hardware-details.component.html',
    styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {
    product;
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.route.paramMap.subscribe(params => {
            this.product = products[params.get('HardwareId')];
        });
    }


}