import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) {}

  //Fetch User information
  getUserinformation(TOKEN) {
    const headerDict = {
      'Authorization': `Bearer ${TOKEN}`
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    }
    return this.http.get('https://juthappapi.herokuapp.com/friends', requestOptions);
  }
}
