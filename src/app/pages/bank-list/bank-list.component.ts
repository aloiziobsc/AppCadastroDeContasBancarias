import { Component } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent {
  fetchData: any

  constructor(private requestsService: RequestsService) {
    this.requestsService.getBankListData().subscribe((data) => {
      this.fetchData = data
      console.log(data)
    })
  }

  ngOnInit(): void {
    
  }
}
