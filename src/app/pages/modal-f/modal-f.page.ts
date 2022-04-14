import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCPage } from '../modal-c/modal-c.page';

@Component({
  selector: 'app-modal-f',
  templateUrl: './modal-f.page.html',
  styleUrls: ['./modal-f.page.scss'],
})
export class ModalFPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalCPage ,
      componentProps : {
        nombre: 'Elefante',
        especie: 'Paquidermo',
        comida: 'herviboro'
      }
    });
     await modal.present();

    const info = await modal.onDidDismiss();

    console.log(info);
  
  }

}
