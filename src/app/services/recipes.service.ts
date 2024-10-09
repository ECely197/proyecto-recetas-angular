import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  private http = inject(HttpClient);


  constructor() {}

  getAllRecipes() {
    return this.http.get("http://localhost:3000/api/recipes/")
  }

  getOneRecipe() {}
}
