import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe/service/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchValue: string = '';
  constructor(private recipeService: RecipeService, private router: Router) {}

  searchRecipe(): void {
    if (this.searchValue.trim() !== '') {
      this.recipeService.searchRecipe(this.searchValue).subscribe((recipe) => {
        if (recipe) {
          const firstRecipe = recipe; // Get the first matching recipe
          this.router.navigate(['/recipes', recipe.results[0].id]); // Navigate to /recipes/recipeId
        } else {
          console.log('No recipes found.');
        }
      });
    }
  }
}
