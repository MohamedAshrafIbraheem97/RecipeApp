import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  isFavorite!: boolean;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) this.fetchRecipeData(Number(id));
    });
  }

  fetchRecipeData(recipeId: number) {
    this.recipeService.getRecipeDetailsById(recipeId).subscribe((res) => {
      if (res) {
        this.recipe = res;
        this.checkIfFavorite(this.recipe);
      }
    });
  }
  addToFavorites(recipe: Recipe): void {
    this.recipeService.toggleFavorite(recipe);
  }

  checkIfFavorite(recipe: Recipe): void {
    this.recipeService.isFavorite(recipe).subscribe((isFav: boolean) => {
      this.isFavorite = isFav;
    });
  }
}
