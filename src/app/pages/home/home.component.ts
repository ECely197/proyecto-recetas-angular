import { Component, signal, inject } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { RecipesService } from '../../services/recipes.service';
import Recipe from '../../../../Types/Recipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private recipesService = inject(RecipesService);
  recipes = signal<null | Recipe[]>(null);

  ngOnInit() {
    this.recipesService.getAllRecipes().subscribe({
      next: (response: any) => {
        console.log(response);
        this.recipes.set(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
