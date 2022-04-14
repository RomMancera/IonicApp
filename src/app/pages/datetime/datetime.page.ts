import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  birth: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  myOptions={
    buttons: [
      {
      text:'Roman',
      handler: (event) => {
        console.log(event);
      }
      },
      {
        text:'Mancera'
        }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

 sendDate(ev){
   console.log(ev.detail.value);
   console.log(new Date(ev.detail.value));
 }

}
