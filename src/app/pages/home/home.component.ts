import { Component } from '@angular/core';
import { registeredItem } from './interfaces/RegisteredItem'
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  registeredList: any
  registeredListParsed: registeredItem[]

  constructor(private router: Router) {
    this.registeredList = window.localStorage.getItem('registeredList')
    this.registeredListParsed = this.registeredList && JSON.parse(this.registeredList)
  }

  goToBankList() {
    this.router.navigate(['/lista'])
  }
}
