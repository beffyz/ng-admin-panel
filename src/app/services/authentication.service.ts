import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userDetails: {
    email: string;
    password: string;
  }): Observable<string | boolean> {
    if (
      userDetails.email === 'admin@gmail.com' &&
      userDetails.password === 'admin123'
    ) {
      this.setToken('randomtokemgenerated');
      return of(true);
    }
    return throwError(() => new Error('Login Failed'));
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
