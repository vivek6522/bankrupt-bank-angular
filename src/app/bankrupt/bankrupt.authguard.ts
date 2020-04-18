import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BankruptAuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  canActivate() {
    return this.authService.isAuthenticated.pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.authService.login(this.router.url);
        }
      })
    );
  }
}
