import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isloggedIn) return true;

  const username = localStorage.getItem('loggedUser');
  if (localStorage.getItem('isloggedIn') === 'true' && username && authService.setLoggedUserFromLocalStorage(username)) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
