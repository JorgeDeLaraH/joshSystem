import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AlertService } from '../../../services/alert.service';
import { FormsModule } from '@angular/forms';
import { ClientsService } from '../../../services/clients.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-client-catalogcont',
  standalone: true,
  imports: [NgClass,FormsModule, CommonModule],
  templateUrl: './client-catalogcont.component.html',
  styleUrl: './client-catalogcont.component.css'
})
export class ClientCatalogcontComponent {
  constructor(private alert: AlertService,private clientService: ClientsService){}
  searchTerm:any
  prueba:any
  search(){
    this.clientService.searchClients(this.searchTerm).subscribe((res)=>{
      this.prueba=res.Respuesta
      console.log(res)
    })
  }
}
