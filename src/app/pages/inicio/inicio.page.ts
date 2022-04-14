import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Comp } from 'src/app/interfaces/interfaces';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: Comp [] = [];
  constructor(private menu:MenuController,
              private usS:UsersService) { }

  ngOnInit() {
    this.usS.getOptions().subscribe
    ( (opts) => {
      this.components = opts;
    })
  }

   verMenu(){
    this.menu.open('first');
   }
   
}
