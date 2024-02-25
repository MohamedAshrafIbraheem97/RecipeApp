import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe/models/recipe.model';
import { RecipeService } from 'src/app/recipe/service/recipe.service';
import { FavoriteRecipeService } from '../../services/favorite-recipe.service';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.scss'],
})
export class FavoriteRecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  ngOnInit(): void {
    this.favoriteRecipeService.getFavoriteRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  constructor(private favoriteRecipeService: FavoriteRecipeService) {}
}
