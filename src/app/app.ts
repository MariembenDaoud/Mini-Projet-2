import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = "Mes Animaux ";

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('isloggedIn') === 'true';
    const username = localStorage.getItem('loggedUser');
    if (!loggedIn || !username || !this.authService.setLoggedUserFromLocalStorage(username)) {
      void this.router.navigate(['/login']);
    }
  }

  onLogout(): void {
    this.authService.logout();
  }
}
