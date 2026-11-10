import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly users: User[] = [
    { username: 'Admin', password: '123', roles: ['ADMIN'] },
    { username: 'Mariem', password: '123', roles: ['USER'] }
  ];

  loggedUser?: string;
  isloggedIn = false;
  roles?: string[];

  constructor(private router: Router) {}

  signIn(user: Pick<User, 'username' | 'password'>): boolean {
    const validUser = this.users.find(
      (candidate) => candidate.username === user.username && candidate.password === user.password,
    );
    if (!validUser) return false;

    this.loggedUser = validUser.username;
    this.roles = [...validUser.roles];
    this.isloggedIn = true;
    localStorage.setItem('loggedUser', validUser.username);
    localStorage.setItem('isloggedIn', 'true');
    return true;
  }

  logout(): void {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', 'false');
    void this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.roles?.includes('ADMIN') ?? false;
  }

  setLoggedUserFromLocalStorage(username: string): boolean {
    const user = this.users.find((candidate) => candidate.username === username);
    if (!user) return false;
    this.loggedUser = user.username;
    this.roles = [...user.roles];
    this.isloggedIn = true;
    return true;
  }
}
