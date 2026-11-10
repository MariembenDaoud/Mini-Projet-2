
import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './model/animal.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(animaux: Animal[] | null, searchTerm: string = ''): Animal[] {
    if (!animaux) return [];

    const terme = searchTerm.trim().toLowerCase();

    if (!terme) return animaux;

    return animaux.filter(animal =>
      (animal.nomAnimal ?? '').toLowerCase().includes(terme)
    );
  }
}
