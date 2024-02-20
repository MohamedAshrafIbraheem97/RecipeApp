import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe/models/recipe.model';
import { RecipeService } from 'src/app/recipe/service/recipe.service';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.scss'],
})
export class FavoriteRecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  ngOnInit(): void {
    this.recipeService.getFavoriteRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  constructor(private recipeService: RecipeService) {}
}
