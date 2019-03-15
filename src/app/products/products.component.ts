import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products;
	constructor(public _productservice:ProductService, public router:Router) { }

	ngOnInit() {
		this.getdt();
	}

	getdt(){
		this._productservice.getdata().subscribe(res=>{
			console.log("res-=-=-=",res);
			this.products=res;
		},err=>{
			console.log("res-=-=-=",err);
		})
	}

	deleteData(product){
		console.log(product._id);
		this._productservice.deletedata(product._id).subscribe(res=>{
			console.log("res-=-=",res);
			this.getdt();
		},err=>{
			console.log("res-=-=",err);
		})
	}
}