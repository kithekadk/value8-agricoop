import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequest } from 'src/app/interfaces/Userrequest';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products!:UserRequest[];
grandTotal:number=0;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartService.getCartItem().subscribe(res=>{
      this.products=res;
      this.grandTotal = this.cartService.getTotalPrice()
    }) 
  }

  allProducts(){
    this.router.navigate(['allproducts']);
  }

  removeItem(index: number){
    this.cartService.removeOneItem(index)
  }

  emptyCart(){
    this.cartService.clearCart()
  }
}
