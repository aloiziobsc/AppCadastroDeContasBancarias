import { Component } from '@angular/core';
import { bankData } from '../bank-list/interfaces/BankData';
import { Router } from "@angular/router";

@Component({
  selector: 'app-resgister-client',
  templateUrl: './resgister-client.component.html',
  styleUrls: ['./resgister-client.component.css']
})
export class ResgisterClientComponent {
  bankInfo:any
  bankInfoParsed:bankData

  constructor(private router: Router) {
    this.bankInfo = window.localStorage.getItem('bankInfo')
    this.bankInfoParsed = this.bankInfo && JSON.parse(this.bankInfo)
  }

  register(agency:string, account:string) {
    let prevState = localStorage.getItem('registeredList');
    let newRegister = { 
      code: this.bankInfoParsed.code,
      bankAgency: agency,
      account: account
    }
    let newState = [newRegister]

    if(prevState) {
      newState = [...JSON.parse(prevState), newRegister]
    }

    if(agency && account) {
      localStorage.setItem('registeredList', JSON.stringify(newState));
      this.router.navigate(['/'])
    }
  }
}
