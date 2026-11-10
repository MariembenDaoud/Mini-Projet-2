import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GroupeAnimal } from '../model/groupe-animal.model';
import { AnimalService } from '../services/animal.service';
import { UpdateGroupeForm } from './update-groupe-form';

@Component({
  selector: 'app-liste-groupes',
  standalone: true,
  imports: [CommonModule, UpdateGroupeForm],
  templateUrl: './liste-groupes.html'
})
export class ListeGroupes implements OnInit {
  groupes: GroupeAnimal[] = [];
  groupeSelectionne: GroupeAnimal = { idGroupe: 0, nomGroupe: '' };
  ajout = true;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.chargerGroupes();
  }

  chargerGroupes(): void {
    this.groupes = this.animalService.listeGroupes();
  }

  updateGroupe(groupe: GroupeAnimal): void {
    this.groupeSelectionne = { ...groupe };
    this.ajout = false;
  }

  groupeUpdated(groupe: GroupeAnimal): void {
    if (this.ajout) {
      const prochainId = Math.max(0, ...this.groupes.map(g => g.idGroupe)) + 1;
      this.animalService.ajouterGroupe({ ...groupe, idGroupe: prochainId });
    } else {
      this.animalService.updateGroupe(groupe);
    }
    this.chargerGroupes();
    this.groupeSelectionne = { idGroupe: 0, nomGroupe: '' };
    this.ajout = true;
  }
}
