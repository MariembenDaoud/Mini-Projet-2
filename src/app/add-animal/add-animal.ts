
import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { GroupeAnimal } from '../model/groupe-animal.model';
import { AnimalService } from '../services/animal.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-animal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-animal.html',
  styles: ``
})
export class AddAnimal implements OnInit {

  newAnimal: Animal = {};

  groupes!: GroupeAnimal[];
  newIdGroupe!: number;
  newGroupe!: GroupeAnimal;

  constructor(
    private animalService: AnimalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.groupes = this.animalService.listeGroupes();

    if (this.groupes.length > 0) {
      this.newIdGroupe = this.groupes[0].idGroupe;
    }
  }

  addAnimal(): void {
    this.newGroupe =
      this.animalService.consulterGroupe(this.newIdGroupe);

    this.newAnimal.groupeAnimal = this.newGroupe;

    this.animalService.ajouterAnimal(this.newAnimal);

    this.router.navigate(['animaux']);
  }
}
