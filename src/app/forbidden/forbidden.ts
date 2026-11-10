import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  template: '<div class="alert alert-danger" role="alert"><strong>Vous n’êtes pas autorisé à accéder à cette page.</strong></div>',
})
export class Forbidden {}
