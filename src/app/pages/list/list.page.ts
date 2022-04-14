import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users:any[] =[];

  constructor(private userServ: UsersService) { }

  ngOnInit() {

    this.userServ.obtenerUsers().subscribe
    ( (usuarios:any) => {
      this.users = usuarios;
      console.log(usuarios);
    })
  }

  favorite(us:any){
    console.log('Mi favorito es:', us.name);
  }

  share(us:any){
    console.log('Compartiendo a:', us);
  }


}
