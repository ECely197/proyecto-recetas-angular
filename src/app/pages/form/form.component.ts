import { Component, inject } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  recipeService = inject(RecipesService);
  newRecipeForm = new FormGroup({
    img: new FormControl('', {
      validators: [Validators.required],
    }),
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
    description: new FormControl('', {
      validators: [Validators.required],
    }),
    preparation: new FormControl('', {
      validators: [Validators.required],
    }),
    cooking: new FormControl('', {
      validators: [Validators.required],
    }),
    total: new FormControl('', {
      validators: [Validators.required],
    }),
    instructions: new FormControl('', {
      validators: [Validators.required],
    }),
    calories: new FormControl('', {
      validators: [Validators.required],
    }),
    carbohydrates: new FormControl('', {
      validators: [Validators.required],
    }),
    protein: new FormControl('', {
      validators: [Validators.required],
    }),
    fat: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  get img() {
    return this.newRecipeForm.get('img');
  }
  get title() {
    return this.newRecipeForm.get('title');
  }

  get description() {
    return this.newRecipeForm.get('description');
  }

  get preparation() {
    return this.newRecipeForm.get('preparation');
  }

  get cooking() {
    return this.newRecipeForm.get('cooking');
  }

  get total() {
    return this.newRecipeForm.get('total');
  }

  get instructions() {
    return this.newRecipeForm.get('instructions');
  }

  get calories() {
    return this.newRecipeForm.get('calories');
  }

  get carbohydrates() {
    return this.newRecipeForm.get('carbohydrates');
  }

  get protein() {
    return this.newRecipeForm.get('protein');
  }

  get fat() {
    return this.newRecipeForm.get('fat');
  }

  handleSubmit() {
    console.log('se ha hecho un submit');
    if (this.newRecipeForm.valid) {
      console.log(this.title?.value);
      const newRecipe = {
        id: Date.now,
        img: '',
        title: this.title?.value,
        description: this.description?.value,
        times: {
          preparation: this.preparation?.value,
          cooking: this.cooking?.value,
          total: this.total?.value,
        },
        instructions: this.instructions?.value?.split('\n'),
        preparation: this.preparation?.value?.split('\n'),
        nutritionalValues: {
          calories: this.calories?.value,
          carbohydrates: this.carbohydrates?.value,
          protein: this.protein?.value,
          fat: this.fat?.value,
        },
      };
      console.log(newRecipe);
      console.log('Se agrego una nueva receta');
    } else {
      console.log('El formulario tiene algunos errores');
    }
  }
}
