import { Component, OnInit, HostListener } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  id: any
  nombreCompleto = ""
  rol = ""
  constructor(
    private service: ClientsService,
    public router: Router,
    public alertService: AlertService
  ) {}
  //Captura el evento de dar marcha atras en el navegador
  @HostListener('window:popstate',['$event'])
  onPopState(event: any){
    this.alertService.generalAlert("Alerta", "Por seguridad se cerro sesion", "warning", "#277FF2")
    localStorage.removeItem("key");
  }
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.id = localStorage.getItem('key');
      if (this.id !== null) {
        this.service.getUser(this.id).subscribe((res: any) => {
          this.nombreCompleto = res.Nombre + " " + res.Apellido;
          this.rol = res.Rol;
        })
      }
      else {
        this.alertService.generalAlert("Alerta", "Por favor inicia sesión", "warning", "#277FF2")
        this.router.navigate(['login'])
      }
    }
    

  }
  sesionClose() {
    localStorage.removeItem("key");
    this.router.navigate(['login'])
  }


}
