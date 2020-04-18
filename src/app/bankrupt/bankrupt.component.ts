import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-bankrupt',
  templateUrl: './bankrupt.component.html',
  styleUrls: ['./bankrupt.component.scss'],
})
export class BankruptComponent implements OnInit {
  isBurgerActive: boolean;

  constructor(readonly authService: AuthService) {}

  ngOnInit() {
    this.isBurgerActive = false;
  }

  toggleBurgerActive() {
    this.isBurgerActive = !this.isBurgerActive;
  }
}
