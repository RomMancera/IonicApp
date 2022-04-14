import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

 colores = [
   {
     name :'success',
     select: true
   },
   {
    name :'warning',
    select: false
  },
  {
    name :'primary',
    select: false
  },
  {
    name :'danger',
    select: false
  },
  {
    name :'success',
    select: false
  },

 ]

  constructor() { }

  ngOnInit() {
  }
  enviarDatos(item: any){
    console.log(item);
  }
  enviarDato(){
    console.log(this.colores);
  }
}
