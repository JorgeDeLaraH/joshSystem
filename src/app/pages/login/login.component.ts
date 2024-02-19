import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  ) { }

  password = ''
  username = ''

  login(e: Event) {
    e.preventDefault();
    console.log("Entre a login")
    let data = {
      user: this.username,
      password: this.password
    }
    if(data.user!='' && data.password!=''){
      this.authService.authPost(data).subscribe((res: any) => {
        console.log(res.Estatus_Acreditado)
        if (res.Estatus_Acreditado == true) {
          this.router.navigate(['principal',data.user])
        }
        else {
          Swal.fire(
            {
              title:"Alerta",
              text: "Verifica tus credenciales",
              icon: "warning",
              confirmButtonColor:'#277FF2'
            }
          );
        }
      })
    }
    else{
      Swal.fire(
        {
          title:"Alerta",
          text: "Llena los campos por favor",
          icon: "warning",
          confirmButtonColor:'#277FF2'
        }
      );
    }
    
  }
  
}
