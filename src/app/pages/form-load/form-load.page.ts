import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-form-load',
  templateUrl: './form-load.page.html',
  styleUrls: ['./form-load.page.scss'],
})
export class FormLoadPage implements OnInit {

  usuario={
    usuario: '',
    password: '',
    correo: '',
    curp:''
  }

  loading: HTMLIonLoadingElement ;

  constructor(private load: LoadingController) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.presentLoading('Mandando formulario');
    setTimeout(() => {
      console.log(form.value);
      this.loading.dismiss();
    }, 5000);
    
  }
 
/* 
  verLoading(){
    this.presentLoading('Mandando formulario');
    setTimeout(() =>{
    this.loading.dismiss();
   }, 5000)
  } */

  async presentLoading(mensaje: string) {
    this.loading = await this.load.create({
      message: ` ${mensaje}`,
    });
    await this.loading.present();

    
  }


}
