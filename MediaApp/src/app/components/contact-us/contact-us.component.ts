import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted : boolean= false;
  successMessage: boolean =false;
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group(
      {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      number: ['',  [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      message: ['', Validators.required]
    });

  }

  get fval() { 
    return this.myForm.controls; 
  }

  addPost(){
    this.submitted= true;
    if(this.myForm.valid){
      this.successMessage = true;
      console.log("Form with empty is valid")
    }
  }
}
