import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicData } from '../../Services/dynamic-data';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { passwordMatched } from '../customFormValidation/passwordMatched';
import { User } from '../../Interfaces/User/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
   RegisterForm:FormGroup;
   genders = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' }
];
roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'moderator', label: 'Moderator' },
  { value: 'user', label: 'User' }
];

  constructor(private service:DynamicData , private router:Router ,
    private fb:FormBuilder
    , private tost:ToastrService)
    {
     this.RegisterForm = this.fb.group({
  fname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
  lname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
  email: ['', [Validators.required, Validators.email]],
  age: ['', [Validators.required]],
  gender: ['', [Validators.required]],
  role: ['', [Validators.required]],
  password: ['', [Validators.required]],
  confirmedpassword: ['', [Validators.required]],
}, {
  validators: passwordMatched()
});
    }


    RegisterUser(){
          if (this.RegisterForm.invalid) return;
    const user: User = this.RegisterForm.value;


  this.service.getAllUsers().subscribe(users => {

    const exists = users.some(u => u.email === user.email);

    if (exists) {
      this.tost.error("Email already exists");
      return;
    }
    
this.service.Register(user).subscribe({
      next: () => {
        
        this.tost.success("User registered successfully");
        this.router.navigateByUrl('/login');
      },
      error: () => {
        this.tost.error("Something went wrong");
       }
    });

  });
}}
