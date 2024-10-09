import { Component, inject, Input, signal } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import Recipe from '../../../../Types/Recipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  recipeServie = inject(RecipesService);
  @Input() id?: string;
  recipe = signal<null | Recipe>(null);
  ngOnInit() {
    console.log(`este es el detalle de la receta...`, this.id);
  }
}
