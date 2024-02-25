import { Component, ElementRef, Input } from '@angular/core';
import { FavoriteRecipeService } from 'src/app/favorite-recipe/services/favorite-recipe.service';
import { Recipe } from 'src/app/recipe/models/recipe.model';
import { RecipeService } from 'src/app/recipe/service/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  isFavorite!: boolean;

  constructor(private favoriteRecipeService: FavoriteRecipeService) {}

  ngOnInit(): void {
    this.checkIfFavorite(this.recipe);
  }

  addToFavorites(recipe: Recipe): void {
    this.favoriteRecipeService.toggleFavorite(recipe);

    console.log('clicked', this.isFavorite);
  }

  checkIfFavorite(recipe: Recipe): void {
    this.favoriteRecipeService
      .isFavorite(recipe)
      .subscribe((isFav: boolean) => {
        console.log(isFav);

        this.isFavorite = isFav;
      });
  }
}
