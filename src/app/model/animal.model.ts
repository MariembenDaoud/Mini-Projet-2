
import { GroupeAnimal } from './groupe-animal.model';

export interface Animal {
  idAnimal?: number;
  nomAnimal?: string;
  espece?: string;
  age?: number;
  dateNaissance?: Date;
  groupeAnimal?: GroupeAnimal;
}
