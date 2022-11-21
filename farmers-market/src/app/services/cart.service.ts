import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRequest } from '../interfaces/Userrequest';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  public cartList: UserRequest[]=[]
  public ProductList = new BehaviorSubject<UserRequest[]>([]);

  getCartItem(){
    return this.ProductList.asObservable()
  }

  setProduct(product: UserRequest[]){
    this.cartList.push(...product)
    this.ProductList.next(product)
  }

  addToCartList(product: UserRequest){
    this.cartList.push(product)
    this.ProductList.next(this.cartList)
    this.getTotalPrice()
    console.log(this.cartList);
    
  }

  getTotalPrice(){
    let grandTotal=0
    this.cartList.map((el: UserRequest)=>{
      grandTotal += (el.productPrice * el.productQuantity)
    })
    return grandTotal
  }

  clearCart(){
    this.cartList=[]
    this.ProductList.next(this.cartList)
    console.log(this.cartList);
    
  }

  removeOneItem(index:number){
    this.cartList.splice(index,1)
    this.ProductList.next(this.cartList)
  }
}
