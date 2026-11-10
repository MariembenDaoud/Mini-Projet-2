import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { SearchFilterPipe } from '../search-filter-pipe';
@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {

  nomAnimal!: string;
  animaux!: Animal[];
  searchTerm: string = '';

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animaux = this.animalService.listeAnimaux();
  }

  rechercherAnimaux(): void {
    if (this.nomAnimal) {
      this.animaux = this.animalService.rechercherParNom(this.nomAnimal);
    } else {
      this.animaux = this.animalService.listeAnimaux();
    }
  }
}