import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token');

  }
  token: any;

  getAllbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('https://localhost:44382/api/Book/GetAllBooks', true, header)
  }

  getbybookid(bookid: any) {
    {
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
      }
      return this.httpservice.getService(`https://localhost:44302/api/Book/GetBookById?id=${bookid}`, true, header)
    }
  }
}
