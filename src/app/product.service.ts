import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url='http://localhost:8080/api/v1/products';

  constructor(private http:HttpClient) { }

  createProduct(product:Product):Observable<Object>{
    return this.http.post(`${this.url}`,product);
    }


   getProductsList():Observable<Product[]>{
  
    return this.http.get<Product[]>(`${this.url}`);
    }

   updatePrduct(id:number,product:Product):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,product);
   }

  
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
    }

  deleteProduct(id:number):Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
     }
}
