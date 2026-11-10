import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupeAnimal } from '../model/groupe-animal.model';

@Component({
  selector: 'app-update-groupe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-groupe-form.html'
})
export class UpdateGroupeForm {
  @Input() groupe!: GroupeAnimal;
  @Input() ajout = true;
  @Output() groupeUpdated = new EventEmitter<GroupeAnimal>();

  saveGroupe(): void {
    this.groupeUpdated.emit(this.groupe);
  }
}
