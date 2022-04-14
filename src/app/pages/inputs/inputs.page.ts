import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

 usuario={
   nombre: '',
   password: '',
   correo: ''
 }

  constructor() { }

  ngOnInit() {
  }

 onSubmit(form){
   console.log(form.value);
 }

}
