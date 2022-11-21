import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public subscribeForm!: FormGroup;
  isSubmit = true;
  submittedMessage = '';
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  subscribeMessage(value: any) {
    console.log(value)
    this.isSubmit = true;
    this.submittedMessage = 'Submitted Successfully';
  }

}
