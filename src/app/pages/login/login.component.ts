import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
NgClass
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,FormsModule],
  providers:[],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = '';
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  
  login(e: Event){
    e.preventDefault();
    console.log("Entre a login")
    window.location.href="principal";
  }
  
}
