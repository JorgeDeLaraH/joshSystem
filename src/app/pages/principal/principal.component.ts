import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  nombre=""
  constructor(private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.nombre=params['dato']
    })
  }
  redirect(valor:any){
    console.log(valor.value)
  }
  
}
