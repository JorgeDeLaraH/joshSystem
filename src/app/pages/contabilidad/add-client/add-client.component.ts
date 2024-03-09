import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { person } from '../../../models/persona.model';
import { ClientsService } from '../../../services/clients.service';
import { HttpClientModule} from '@angular/common/http';
import {  } from 'crypto';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers:[ClientsService],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent implements OnInit{
  constructor(
    private clientService:ClientsService
  ){}
  persona=new person()
  
  ngOnInit(): void {
    this.persona.CURP="holis"
    console.log(this.persona.CURP)
  }

  async submit(){
    console.log(this.persona)
    await this.clientService.postCliente(this.persona).subscribe((res:any)=>{
      console.log(res)
    })

  }

}
