import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
{
	path:'',
	redirectTo:'/productsComponent',
	pathMatch:'full'
},
{
	path:'productsComponent',
	component:ProductsComponent
},
{
	path:"editProductComponent",
	component:EditproductComponent
},
{
	path:'addProductComponent',
	component:AddproductComponent
},
{
	path:"editProduct/:_id",
	component:EditproductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
