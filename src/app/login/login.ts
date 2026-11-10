import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {
  user: Pick<User, 'username' | 'password'> = { username: '', password: '' };
  erreur = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin(): void {
    if (this.authService.signIn(this.user)) {
      this.erreur = false;
      void this.router.navigate(['/animaux']);
    } else {
      this.erreur = true;
    }
  }
}
