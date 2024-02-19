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
      if (res) this.recipe = res;
      console.log(
        res?.analyzedInstructions?.forEach((item) => console.log(item))
      );
    });
  }
  isFavorite: boolean = false;
  addToFavorites() {}
}
