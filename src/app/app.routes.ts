
import { Routes } from '@angular/router';
import { Animaux } from './animaux/animaux';
import { AddAnimal } from './add-animal/add-animal';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { RechercheParGroupe } from './recherche-par-groupe/recherche-par-groupe';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { produitGuard } from './guards/produit.guard';
import { UpdateAnimal } from './updateAnimal/update-animal';
import { authGuard } from './guards/auth.guard';
import { ListeGroupes } from './liste-groupes/liste-groupes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'animaux',
    pathMatch: 'full'
  },
  {
    path: 'animaux',
    component: Animaux,
    canActivate: [authGuard]
  },
  {
    path: 'add-animal',
    component: AddAnimal,
    canActivate: [authGuard, produitGuard]
  },
  {
    path: 'updateAnimal/:id',
    component: UpdateAnimal,
    canActivate: [authGuard, produitGuard]
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'app-forbidden',
    component: Forbidden
  },
  {
    path: 'recherche-par-nom',
    component: RechercheParNom,
    canActivate: [authGuard]
  },
  {
    path: 'recherche-par-groupe',
    component: RechercheParGroupe,
    canActivate: [authGuard]
  },
  {
    path: 'listeGroupes',
    component: ListeGroupes,
    canActivate: [authGuard, produitGuard]
  },
  {
    path: '**',
    redirectTo: 'animaux'
  }
];
