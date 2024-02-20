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
  private _pageNumber = 1;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.fetchRecipes(this._pageNumber);
  }

  // fetch random recipes from the backend
  private fetchRecipes(pageNumber: number) {
    this.recipeService.getRandomRecipes(pageNumber).subscribe((newRecipes) => {
      this.recipes = this.recipes.concat(newRecipes);
    });
  }

  // is triggered when scrolling
  onScroll() {
    this._pageNumber++;
    this.fetchRecipes(this._pageNumber);
  }
}
