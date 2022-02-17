import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  product: any[] = [
    {
      "prod_name": "Nezuko and Tanjiro",
      "prod_manufacturer": "Grandista",
      "price": "$280.00"
    },
    {
      "prod_name": "Rimuru",
      "prod_manufacturer": "Banpresto",
      "price": "$190.00"
    },
    {
      "prod_name": "DXF Asta",
      "prod_manufacturer": "Banpresto",
      "price": "$150.00"
    },
    {
      "prod_name": "Senku",
      "prod_manufacturer": "Grandista",
      "price": "$140.00"
    },
    {
      "prod_name": "Dekku",
      "prod_manufacturer": "Banpresto",
      "price": "$120.00"
    },
    {
      "prod_name": "Kaido",
      "prod_manufacturer": "Grandista",
      "price": "$400.00"
    }
  ];
  
  ngOnInit(): void {
  }

}
