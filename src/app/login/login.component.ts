import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

  usernameFocused() {
    document.getElementById('usernameLabel').style.top = '-20px';
    this.passwordBlured();
    document.getElementById('usernameInput').focus();
    document.getElementById('usernameLabel').style.color = "rgba(211, 211, 211, 0.908)";
  }

  usernameBlured() {
    const username = (<HTMLInputElement>document.getElementById('usernameInput')).value;
    if(username.length === 0) {
      document.getElementById('usernameLabel').style.top = '5px';
      document.getElementById('usernameLabel').style.color = "white";
    }
  }

  passwordFocused() {
    document.getElementById('passwordLabel').style.top = '-20px';
    document.getElementById('passwordInput').focus();
    document.getElementById('passwordLabel').style.color = "rgba(211, 211, 211, 0.808)";
    this.usernameBlured();
  }

  passwordBlured() {
    const password = (<HTMLInputElement>document.getElementById('passwordInput')).value;
    if(password.length === 0) {
      document.getElementById('passwordLabel').style.top = '5px';
      document.getElementById('passwordLabel').style.color = "white";
    }
  }

}
