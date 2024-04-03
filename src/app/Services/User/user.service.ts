import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any

  constructor(private httpservice: HttpService) { }


  register(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.httpservice.postService('https://localhost:44302/api/User/Reg', reqData, false, header)
  }


  login(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }

    return this.httpservice.postService('https://localhost:44302/api/User/Log', reqData, false, header)
  }


  forget(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/',
        //'Authorization':'token'
      })
    }
    console.log(reqData)
    return this.httpservice.postService('https://localhost:44302/api/User/ForgotPassword?Email='+reqData.UserEmail, {}, false, header)
  }


  reset(reqData: any, token: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.httpservice.postServiceReset('https://localhost:44302/api/User/ResetPassword', reqData, true, header)
  }
}
