import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getdata(){
  	return this.http.get("http://localhost:3000/product/");
  }

  postData(product){
  	return this.http.post("http://localhost:3000/product/",product);
  }

  getDataById(id){
    return this.http.get("http://localhost:3000/product/"+id);
  }

  putData(id,product){
  	return this.http.put("http://localhost:3000/product/"+id,product);
  }
}