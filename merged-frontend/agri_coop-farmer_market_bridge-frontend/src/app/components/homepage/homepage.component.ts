import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public contactForm!: FormGroup;
  isSubmit = true;
  submittedMessage = '';

  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
  
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendMessage(value: any) {
    console.log(value)
    this.isSubmit = true;
    this.submittedMessage = 'Thank You for your Message.';
    this.toast.info({ detail: 'Messsage Submitted', summary: "Thank You", duration: 3000 })
    setTimeout(() => {
      this.isSubmit = false;
    }, 4000);
  }

}
