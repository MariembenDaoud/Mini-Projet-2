
import { Injectable } from '@angular/core';
import { Animal } from '../model/animal.model';
import { GroupeAnimal } from '../model/groupe-animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  groupes: GroupeAnimal[] = [];

  animaux: Animal[] = [];

  animal!: Animal;

  constructor() {
    this.groupes = [
      { idGroupe: 1, nomGroupe: 'Mammifères' },
      { idGroupe: 2, nomGroupe: 'Oiseaux' },
      { idGroupe: 3, nomGroupe: 'Reptiles' }
    ];

    this.animaux = [
      {
        idAnimal: 1,
        nomAnimal: 'Mimi',
        espece: 'Chat',
        age: 3,
        dateNaissance: new Date('2023-01-14'),
        groupeAnimal: { idGroupe: 1, nomGroupe: 'Mammifères' }
      },
      {
        idAnimal: 2,
        nomAnimal: 'Max',
        espece: 'Chien',
        age: 5,
        dateNaissance: new Date('2021-12-17'),
        groupeAnimal: { idGroupe: 1, nomGroupe: 'Mammifères' }
      },
      {
        idAnimal: 3,
        nomAnimal: 'Coco',
        espece: 'Perroquet',
        age: 2,
        dateNaissance: new Date('2024-02-20'),
        groupeAnimal: { idGroupe: 2, nomGroupe: 'Oiseaux' }
      }
    ];
  }

  // Retourner la liste des groupes
  listeGroupes(): GroupeAnimal[] {
    return this.groupes;
  }

  ajouterGroupe(groupe: GroupeAnimal): void {
    this.groupes.push(groupe);
  }

  updateGroupe(groupe: GroupeAnimal): void {
    const index = this.groupes.findIndex(g => g.idGroupe === groupe.idGroupe);
    if (index > -1) {
      this.groupes[index] = groupe;
      this.animaux.forEach(animal => {
        if (animal.groupeAnimal?.idGroupe === groupe.idGroupe) {
          animal.groupeAnimal = groupe;
        }
      });
    }
  }

  // Consulter un groupe par son identifiant
  consulterGroupe(id: number): GroupeAnimal {
    return this.groupes.find(g => g.idGroupe == id)!;
  }

  // Retourner la liste des animaux
  listeAnimaux(): Animal[] {
    return this.animaux;
  }

  // Ajouter un animal
  ajouterAnimal(animal: Animal): void {
    this.animaux.push(animal);
  }

  // Supprimer un animal
  supprimerAnimal(animal: Animal): void {
    const index = this.animaux.indexOf(animal, 0);

    if (index > -1) {
      this.animaux.splice(index, 1);
    }
  }

  // Consulter un animal par son identifiant
  consulterAnimal(id: number): Animal {
    this.animal = this.animaux.find(a => a.idAnimal == id)!;
    return this.animal;
  }

  // Modifier un animal : garder une seule définition de cette méthode
  updateAnimal(animal: Animal): void {
    const index = this.animaux.findIndex(
      a => a.idAnimal == animal.idAnimal
    );

    if (index > -1) {
      this.animaux[index] = animal;
    }
  }
  rechercherParGroupe(idGroupe: number): Animal[] {
    return this.animaux.filter(
      animal => animal.groupeAnimal?.idGroupe === idGroupe
    );
  }
  rechercherParNom(nom: string): Animal[] {
    const terme = nom.trim().toLowerCase();
  
    if (!terme) {
      return this.listeAnimaux();
    }
  
    return this.listeAnimaux().filter(animal =>
      (animal.nomAnimal ?? '').toLowerCase().includes(terme)
    );
  }
}
