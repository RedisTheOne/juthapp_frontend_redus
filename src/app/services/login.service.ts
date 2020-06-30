import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LogInData {
  status: Boolean;
  msg: String;
  token: String;
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getUsers(username: String, password: String) {
    this.http.post('https://juthappapi.herokuapp.com/friends/signin', {username, password})
      .subscribe((data: LogInData) => {
        if(data.status) {
          localStorage.setItem('TOKEN', data.token.toString());
          window.location.href = '/juthapp';
        } else
          alert(data.msg);
      });
  }

}
