import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent {
  fetchData = null

  constructor() {}

  ngOnInit(): void {
    
  }
}
