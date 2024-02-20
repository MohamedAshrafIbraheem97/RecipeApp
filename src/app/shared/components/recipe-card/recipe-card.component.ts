import { Component, ElementRef, Input } from '@angular/core';
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

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.checkIfFavorite(this.recipe);
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
