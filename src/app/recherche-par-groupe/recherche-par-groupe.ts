import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Animal } from '../model/animal.model';
import { GroupeAnimal } from '../model/groupe-animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-recherche-par-groupe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-groupe.html',
  styles: ``
})
export class RechercheParGroupe implements OnInit {

  animaux!: Animal[];
  animauxFiltres!: Animal[];
  groupes!: GroupeAnimal[];
  idGroupe!: number;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animaux = this.animalService.listeAnimaux();
    this.animauxFiltres = this.animaux;
    this.groupes = this.animalService.listeGroupes();
  }

  onChange(): void {
    this.animauxFiltres =
      this.animalService.rechercherParGroupe(this.idGroupe);
  }
}