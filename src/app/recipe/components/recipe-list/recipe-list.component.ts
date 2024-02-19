import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  /**
   * inject services
   */
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.getRandomRecipes().subscribe((recipes) => {
      if (recipes.length > 1) this.recipes = recipes;
    });
  }
}
