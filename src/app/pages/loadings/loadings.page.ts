import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loadings',
  templateUrl: './loadings.page.html',
  styleUrls: ['./loadings.page.scss'],
})
export class LoadingsPage implements OnInit {

   loading: HTMLIonLoadingElement ;

  constructor(private load: LoadingController) { }

  ngOnInit() {
  }

  verLoading(){
    this.presentLoading('usuarios');
    setTimeout(() =>{
    this.loading.dismiss();
   }, 2000)
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.load.create({
      message: `Cargando ${mensaje}`,
    });
    await this.loading.present();

    
  }


}
