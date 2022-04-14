import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

 @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

 lista: any[]= Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(){

    if(this.lista.length > 50 ){
      this.infinite.complete();
      this.infinite.disabled= true
      return;
    }

    
    setTimeout(() => {

     const newProducts= Array(20);

     this.lista.push(...newProducts)

      //evnt.target.complete();
this.infinite.complete();

    }, 1000);
  }

}
