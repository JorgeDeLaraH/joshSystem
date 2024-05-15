import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { AlertService } from '../../../services/alert.service';
import { FormsModule } from '@angular/forms';
import { ClientsService } from '../../../services/clients.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-client-catalogcont',
  standalone: true,
  imports: [NgClass,FormsModule, CommonModule, RouterLink],
  templateUrl: './client-catalogcont.component.html',
  styleUrl: './client-catalogcont.component.css'
})
export class ClientCatalogcontComponent implements OnInit{
  constructor(private alert: AlertService,private clientService: ClientsService){}
  searchTerm:any
  prueba:any
  ngOnInit(): void {
    this.clientService.clientsList().subscribe((res:any)=>{
      console.log(res.Respuesta)
      this.prueba=res.Respuesta
    })
  }
  search(){
    this.clientService.searchClients(this.searchTerm).subscribe((res)=>{
      if(res==true){
        this.ngOnInit()
      }
      else{
        console.log(res)
        this.prueba=res.Respuesta
      }
      
    })
  }
}
