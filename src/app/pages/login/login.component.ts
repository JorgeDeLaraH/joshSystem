import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
NgClass
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,FormsModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  
  constructor(private authService:AuthService, private router:Router){}

  password=''
  username=''

  login(e: Event){
    e.preventDefault();
    console.log("Entre a login")
    let data={
      user:this.username,
      password:this.password
    }
    this.authService.authPost(data).subscribe((res:any)=>{
      console.log(res.Estatus_Acreditado)
      if(res.Estatus_Acreditado==true){
        this.router.navigate(['principal'])
      }
      else{
        console.log("Credenciales erroneas")
      }
    })
  }
  
}
