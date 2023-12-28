import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  product: Product = new Product();

  id:number;

  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data=>{
    this.product=data;
    },error=>console.log(error));
    }


    updateProduct(){
    this.productService.updatePrduct(this.id,this.product).
    subscribe(data=>{
    console.log(data);
    this.product=new Product();
    this.gotoList();
    },
    error=>
    console.log(error));
    }
    
    
    onSubmit(){
    this.updateProduct();
    }
    
    gotoList()
  {
  this.router.navigate([`/products`])
  }



}
