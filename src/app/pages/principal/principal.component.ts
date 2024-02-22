import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  id:any
  nombreCompleto=""
  rol=""
  constructor(private service: ClientsService){
  }
  ngOnInit(): void {
    if(typeof localStorage !=='undefined'){
      this.id=localStorage.getItem('key');
    console.log(this.id)
    this.service.getUser(this.id).subscribe((res:any)=>{
      this.nombreCompleto=res.Nombre+" "+res.Apellido;
      this.rol=res.Rol;
      console.log(this.rol)
    })
    }
    
  }

  
}
