
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-animaux',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animaux.html',
  styles: ``
})
export class Animaux implements OnInit {

  animaux!: Animal[];

  constructor(private animalService: AnimalService, public authService: AuthService) {
    this.animaux = animalService.listeAnimaux();
  }

  ngOnInit(): void {
    this.animaux = this.animalService.listeAnimaux();
  }

  supprimerAnimal(animal: Animal): void {
    const conf = confirm('Êtes-vous sûr de vouloir supprimer cet animal ?');

    if (conf) {
      this.animalService.supprimerAnimal(animal);
      this.animaux = this.animalService.listeAnimaux();
    }
  }
}
