import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getBankListData() {
    return this.http.get('https://brasilapi.com.br/api/banks/v1')
  }
}
