import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRequest } from 'src/app/interfaces/Userrequest';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: UserRequest[];
  product=''
  totalItems=0

 
  constructor(private router:Router, private route:ActivatedRoute,
    public api:ApiService, private CartService:CartService) { }

    Activate(){
      this.api.activate.emit(this.product)
    } 

  ngOnInit(): void {
    this.CartService.getCartItem().subscribe(res=>{
      this.totalItems = res.length
    })
  }

  toCart(){
    this.router.navigate(['home/cart'])
  }


}
