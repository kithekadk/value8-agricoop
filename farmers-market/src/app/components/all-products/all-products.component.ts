import { Component, OnInit } from '@angular/core';
import { UserRequest } from 'src/app/interfaces/Userrequest';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
Products!:UserRequest[];
filter=''
  constructor(private api:ApiService, private CartService:CartService) { }

  ngOnInit(): void {
    this.api.getAllRequests().subscribe((res)=>{
      console.log(res)
      return this.Products=res;
    })
  }

  addToCart(item: UserRequest){
    this.CartService.addToCartList(item)
  }

}
