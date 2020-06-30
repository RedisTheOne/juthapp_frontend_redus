import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  isRotated:boolean = false;

  goMarket() {
    this.router.navigate(['juthapp/gigamarket']);
  }

  rotate() {
    if(this.isRotated == false) {
      document.getElementById('round').classList.remove('unrotate');
      document.getElementById('round').classList.add('rotate');
    } else {
      document.getElementById('round').classList.remove('rotate');
      document.getElementById('round').classList.add('unrotate');
    }
    
    this.isRotated = !this.isRotated;
  }
}
