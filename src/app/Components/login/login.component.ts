import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;

  loginForm !:FormGroup;
  constructor(private formbuilder:FormBuilder, private userservice:UserService, private route:Router ){}

  ngOnInit():void {
    this.loginForm = this.formbuilder.group({
      // email:['',[Validators.required,Validators.email]],
      // password:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]]
      email:['',[]],
      password:['',[]]
    });
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
 logIn(){
    console.log("hello")
    if(this.loginForm.valid){
      let reqData={
        useremail:this.loginForm.value.email,
        userpassword:this.loginForm.value.password
      }
      this.userservice.login(reqData).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem("token",res.data);
        this.route.navigateByUrl("dashboard");
      },(error:any)=>{
        console.log(error)
      })
    }
    else{console.log("Invalid Inputs")}
  }
}
