import { Component } from '@angular/core';
import { registeredItem } from './interfaces/RegisteredItem'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  registeredList: any
  registeredListParsed: registeredItem[]

  constructor() {
    this.registeredList = window.localStorage.getItem('registeredList')
    this.registeredListParsed = this.registeredList && JSON.parse(this.registeredList)
  }
}
