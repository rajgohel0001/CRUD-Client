import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-editproduct',
	templateUrl: './editproduct.component.html',
	styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

	id;
	product;
	constructor(public route:ActivatedRoute,public _productservice:ProductService,public router:Router) {
		this.id = this.route.snapshot.params._id;
		this.get();
	}

	ngOnInit() {
	}
	get(){
		this._productservice.getDataById(this.id).subscribe(res=>{
			console.log(this.id);
			this.product = res[0];
			console.log("res-=-=",res);
		},err=>{
			console.log("res-=-=",err);
		})
	}

	updateData(product){
		console.log(product);
		this._productservice.putData(this.id,product).subscribe(res=>{
			console.log("res-=-=",res);
			alert("Data Updated");
			this.router.navigate(["/productsComponent"]);
		},err=>{
			console.log("res-=-=",err);
		})
	}
}
