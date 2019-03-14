import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
	selector: 'app-addproduct',
	templateUrl: './addproduct.component.html',
	styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
	//product;
	constructor(public _productservice:ProductService, public router:Router) { }

	productForm = new FormGroup({
		name: new FormControl(''),
		price: new FormControl(''),
		qun: new FormControl(''),
	});

	ngOnInit() {
	}

	postdata(){
		console.log("product=====>",this.productForm.value);
		this._productservice.postData(this.productForm.value).subscribe(res=>{
			console.log("res-=-=",this.productForm.value);
			alert("Data Inserted");
		},err=>{
			console.log("res-=-=",err);
		})
	}

	// onSubmit() {
	// 	// TODO: Use EventEmitter with form value
	// 	console.log(this.productForm.value);
	// }
}
