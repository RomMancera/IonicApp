import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comp } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  obtenerUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getOptions(){
    return this.http.get<Comp[]>('/assets/datos/menu.json');
  }

}
