import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-login',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  constructor(private router: Router, private service: FriendsService) { }

  view: String = 'FRIENDS_LIST';
  title: String = 'Friends';
  users: Array<String> = [
    'redis',
    'eljo',
    'rakel'
  ]

  ngOnInit() {
    if(!localStorage.getItem('TOKEN'))
      this.router.navigate(['juthapp/']);
    else {
      this.service.getUserinformation(localStorage.getItem('TOKEN'))
        .subscribe(data => {
        });
    }
  }

  friendsListButtonClicked() {
    document.querySelectorAll('.bottom-tabs div').forEach(d => d.classList.remove('active'));
    document.getElementById('friendsList').classList.add('active');
    this.view = 'FRIENDS_LIST';
    this.title = 'Friends';
  }

  addFriendButtonClicked() {
    document.querySelectorAll('.bottom-tabs div').forEach(d => d.classList.remove('active'));
    document.getElementById('addFriend').classList.add('active');
    this.view = 'ADD_FRIEND';
    this.title = 'Add Friend';
  }

  friendReqetsButtonClicked() {
    document.querySelectorAll('.bottom-tabs div').forEach(d => d.classList.remove('active'));
    document.getElementById('friendRequests').classList.add('active');
    this.view = 'FRIEND_REQUESTS';
    this.title = 'Friend Requests';
  }

}
