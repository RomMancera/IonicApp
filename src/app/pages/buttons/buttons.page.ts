import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  like: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.like =!this.like;
  }
}