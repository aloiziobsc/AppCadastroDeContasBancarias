import { Component } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { bankData } from './interfaces/BankData'

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent {
  rawFetchedData: any
  filteredData: any

  constructor(private requestsService: RequestsService) {
    this.requestsService.getBankListData().subscribe((data) => {
      this.rawFetchedData = data
      this.filteredData = data
    })
  }

  search(filterCode:string) : void {
    if(!filterCode) {
      alert("Digite o código do seu banco antes de filtrar")
    } else {
      this.requestsService.getBankByCode(filterCode).subscribe((data) => {
        this.filteredData = [data]
      })
    }
    
    // let intFilterCode = parseInt(filterCode)
    // this.filteredData = this.rawFetchedData.filter((item:bankData) =>
    //   item.code === intFilterCode)
  }

  setBankLocalStorage(bankInfo:bankData) {
    if(localStorage.getItem('bankInfo')) {
      localStorage.removeItem('bankInfo');
    }
    localStorage.setItem('bankInfo', JSON.stringify(bankInfo));
  }
}
