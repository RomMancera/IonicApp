import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-c',
  templateUrl: './modal-c.page.html',
  styleUrls: ['./modal-c.page.scss'],
})
export class ModalCPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
   //recibiendo informacion del modal padre
  @Input() nombre: string;
  @Input() especie: string;
  @Input() comida: string;
  
  ngOnInit() {
  }

 Regresar(){
   this.modalCtrl.dismiss();
 }

 enviarInfo(){
   this.modalCtrl.dismiss({
     nombre: 'Leopardo',
     especie: 'Felino',
     comida: 'carnivoro'
   });
 }

}
