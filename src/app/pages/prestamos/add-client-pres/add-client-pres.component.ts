import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-client-pres',
  standalone: true,
  imports: [NgClass,FormsModule,CommonModule],
  templateUrl: './add-client-pres.component.html',
  styleUrl: './add-client-pres.component.css'
})
export class AddClientPresComponent {
  check:boolean=false
  capturarCheck(event: Event){
    if(this.check==false){
      this.check=true
    }else{
      this.check=false
    }
    console.log(this.check)
  }
}
