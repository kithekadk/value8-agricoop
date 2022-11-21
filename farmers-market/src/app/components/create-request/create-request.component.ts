import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRequest } from 'src/app/interfaces/Userrequest';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  form!: FormGroup
  products! : UserRequest
  Category: string[]=['--Select category--', 'cereals', 'legumes',"beverages","grains","vegetables","fruits"]
  
  constructor(private api:ApiService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      requestCreator:[null,[Validators.required]],
      productName:[null,[Validators.required]],
      productPrice:[null,[Validators.required]],
      productCategory:[null,[Validators.required]],
      productUrl:[null,[Validators.required]],
      productQuantity:[null,[Validators.required]]
    })
  }


  createRequest(){
    

    const form = this.form.value
   
   this.api.createRequest(form).subscribe(res=>{
     
     console.log(res);
     this.router.navigate(['allproducts'])
   })
   }
}
