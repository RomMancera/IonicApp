import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  constructor(private Alertcrtl:AlertController) { }

  ngOnInit() {
  }
  
  async presentAlertMultipleButtons() {
    const alert = await this.Alertcrtl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Are you sure?',
      message: '¿Esta seguro que desea eliminar esta imagen?.',
      buttons: ['Cancelar', 'Sí, eliminar', 'No, conservar']
    });

    await alert.present();
  }

}
