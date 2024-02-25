import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { EndpointsConstants } from 'src/app/core/config/endpoints-constants';
import { URLS } from 'src/app/core/config/api-urls';
import { Ingredient } from '../models/ingredient.model';
import { SearchResult } from '../models/searchResult.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private _favoriteRecipesSubject: BehaviorSubject<Recipe[]> =
    new BehaviorSubject<Recipe[]>([]);
  favoriteRecipes$: Observable<Recipe[]> =
    this._favoriteRecipesSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  getRandomRecipes(pageNumber: number = 1): Observable<Recipe[]> {
    const pageSize: number = 15;
    const offset = (pageNumber - 1) * pageSize;
    return this.httpClient
      .get<any>(
        `${EndpointsConstants.API_ENDPOINT}${URLS.recipes.randomRecipes}${pageSize}&offset=${offset}`
      )
      .pipe(
        map((res) => {
          return res.recipes;
        })
      );
  }

  getRecipeDetailsById(recipeId: number) {
    const url =
      EndpointsConstants.API_ENDPOINT +
      URLS.recipes.recipeById.replace(':id', String(recipeId));

    return this.httpClient.get<Recipe>(url);
    // return of(this.recipes.find((recipe) => recipe.id === recipeId));
  }

  searchRecipe(query: string) {
    const url =
      EndpointsConstants.API_ENDPOINT +
      URLS.recipes.search.replace('searchQuery', query);

    return this.httpClient.get<SearchResult>(url);
  }

  // getFavoriteRecipes(): Observable<Recipe[]> {
  //   this.loadFavoriteRecipes();
  //   return this.favoriteRecipes$;
  // }

  // toggleFavorite(recipe: Recipe): void {
  //   const currentFavorites = this._favoriteRecipesSubject.getValue();
  //   const index = currentFavorites.findIndex(
  //     (favRecipe) => favRecipe.id === recipe.id
  //   );

  //   if (index === -1) {
  //     // Recipe does not exist in favorites, add it
  //     this.addRecipeToFavorites(currentFavorites, recipe);
  //   } else {
  //     // Recipe exists in favorites, remove it
  //     this.removeRecipeFromFavorites(currentFavorites, index);
  //   }
  // }

  // addRecipeToFavorites(currentFavorites: Recipe[], recipe: Recipe): void {
  //   const updatedFavorites = [...currentFavorites, recipe];
  //   this._favoriteRecipesSubject.next(updatedFavorites);
  //   this.saveFavoriteRecipes(updatedFavorites);
  // }

  // removeRecipeFromFavorites(
  //   currentFavorites: Recipe[],
  //   recipeIndex: number
  // ): void {
  //   const updatedFavorites = [...currentFavorites];
  //   updatedFavorites.splice(recipeIndex, 1);
  //   this._favoriteRecipesSubject.next(updatedFavorites);
  //   this.saveFavoriteRecipes(updatedFavorites);
  // }

  // private loadFavoriteRecipes(): void {
  //   const savedRecipes = localStorage.getItem('favoriteRecipes');
  //   if (savedRecipes) {
  //     const parsedRecipes: Recipe[] = JSON.parse(savedRecipes);
  //     this._favoriteRecipesSubject.next(parsedRecipes);
  //   }
  // }

  // private saveFavoriteRecipes(favoriteRecipes: Recipe[]): void {
  //   localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  // }
  // isFavorite(recipe: Recipe): Observable<boolean> {
  //   this.loadFavoriteRecipes();

  //   return this.favoriteRecipes$.pipe(
  //     map((favoriteRecipes) => {
  //       return favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id);
  //     })
  //   );
  // }
}
