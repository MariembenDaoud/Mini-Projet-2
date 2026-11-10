import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-animal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-animal.html',
  styles: ``
})
export class UpdateAnimal implements OnInit {

  currentAnimal: Animal = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    this.currentAnimal = this.animalService.consulterAnimal(
      Number(this.activatedRoute.snapshot.params['id'])
    );
  }

  updateAnimal(): void {
    this.animalService.updateAnimal(this.currentAnimal);
    this.router.navigate(['animaux']);
  }

  changerDate(date: string): void {
    this.currentAnimal.dateNaissance = date
      ? new Date(date)
      : undefined;
  }
}