import { Component } from '@angular/core';
import { DynamicData } from '../../Services/dynamic-data';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm:FormGroup;
  constructor(private service:DynamicData , private router:Router ,
    private fb:FormBuilder
    , private tost:ToastrService)
    {
      this.loginForm =this.fb.group({
        email:['',[Validators.required , Validators.email]],
        password:['',[Validators.required ]]
      });
    }


    

  login(){
      const { email, password } = this.loginForm.value;

    this.service.getAllUsers().subscribe(users=>{
      const user = users.find(u=>u.email ===email && u.password === password);

       if (user) {
        this.router.navigateByUrl('/home');
        this.tost.success("Login success");
    } else {
       this.tost.error("Invalid email or password");
        
    }

    });
  }

}
