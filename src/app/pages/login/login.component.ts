import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
NgClass
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, FormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  password = ''
  username = ''

  login(e: Event) {
    e.preventDefault();
    console.log("Entre a login")
    let data = {
      user: this.username.trim(),
      password: this.password.trim()
    }
    if(data.user!='' && data.password!=''){
      this.authService.authPost(data).subscribe((res: any) => {
        console.log(res)
        if (res.Estatus_Acreditado == true) {
          localStorage.setItem('key',res.Prueba)
          this.router.navigate(['principal'])
        }
        else {
          this.alertService.generalAlert("Alerta","Verifica tus credenciales","warning","#277FF2");
        }
      })
    }
    else{
      this.alertService.generalAlert("Alerta", "Llena los campos por favor","warning","#277FF2");
    }
    
  }
  
}
