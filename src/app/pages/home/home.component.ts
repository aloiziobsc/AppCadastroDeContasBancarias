import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registeredList = window.localStorage.getItem('registeredList')
  registeredListParsed = this.registeredList && JSON.parse(this.registeredList)

  constructor() {}

  ngOnInit(): void {
    if(!this.registeredList) {
      console.log('registeredListEmpty')
    }
  }
}
