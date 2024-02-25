import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EndpointsConstants } from 'src/app/core/config/endpoints-constants';
import { URLS } from 'src/app/core/config/api-urls';
import { Recipe } from 'src/app/recipe/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteRecipeService {
  private _favoriteRecipesSubject: BehaviorSubject<Recipe[]> =
    new BehaviorSubject<Recipe[]>([]);

  constructor(private httpClient: HttpClient) {}

  // get favorites
  getFavoriteRecipes(): Observable<Recipe[]> {
    this.loadFavoriteRecipes();
    return this._favoriteRecipesSubject;
  }

  // eitehr add or remove a recipe from favorites
  toggleFavorite(recipe: Recipe) {
    this._favoriteRecipesSubject.subscribe((res) => {
      const currentFavorites = res;
      console.log(currentFavorites);

      const index = currentFavorites.findIndex(
        (favRecipe) => favRecipe.id === recipe.id
      );
      if (index === -1) {
        // Recipe does not exist in favorites, add it
        this.addRecipeToFavorites(currentFavorites, recipe);
        return true;
      } else {
        // Recipe exists in favorites, remove it
        this.removeRecipeFromFavorites(currentFavorites, recipe, index);
        return false;
      }
    });
  }

  addRecipeToFavorites(currentFavorites: Recipe[], recipe: Recipe): void {
    // add favorite recipe to firebase
    this.httpClient
      .post(
        `https://recipe-app-f8628-default-rtdb.europe-west1.firebasedatabase.app/recipes/favoriteRecipes/${recipe.id}.json`,
        recipe
      )
      .subscribe((res) => res);

    // add favorite recipe to localstorage
    // const updatedFavorites = [...currentFavorites, recipe];
    // this._favoriteRecipesSubject.next(updatedFavorites);
    // this.saveFavoriteRecipesToLocalStorage(updatedFavorites);
  }

  removeRecipeFromFavorites(
    currentFavorites: Recipe[],
    recipe: Recipe,
    recipeIndex: number
  ): void {
    // remove a recipe from favorites in firebase
    const updatedFavorites = [...currentFavorites];
    updatedFavorites.splice(recipeIndex, 1);
    this.httpClient
      .delete(
        `https://recipe-app-f8628-default-rtdb.europe-west1.firebasedatabase.app/recipes/favoriteRecipes/${recipe.id}.json`
      )
      .subscribe((res) => res);

    // remove a recipe from favorites in localstorage
    // this.saveFavoriteRecipesToLocalStorage(updatedFavorites);
    this._favoriteRecipesSubject.next(updatedFavorites);
  }

  private loadFavoriteRecipes(): void {
    this.loadFavoriteRecipesFromFirebase();
    // this.loadFavoriteRecipesFromLocalStorage();
  }
  // get favorited recipes from firebase
  loadFavoriteRecipesFromFirebase() {
    this.httpClient
      .get<any>(
        'https://recipe-app-f8628-default-rtdb.europe-west1.firebasedatabase.app/recipes/favoriteRecipes.json'
      )
      .pipe(
        map((res) => {
          const modifiedRecipes: Recipe[] = [];
          // Convert object entries to an array of recipes with IDs
          if (res) {
            const recipes = Object.entries(res).map(
              ([recipeId, recipe]: [string, any]) => ({
                id: recipeId,
                ...recipe,
              })
            );

            recipes.forEach((recipe) => {
              modifiedRecipes.push(Object.values(recipe)[1] as Recipe);
            });
          }

          return modifiedRecipes; // Return the array of recipes
        })
      )
      .subscribe((res) => this._favoriteRecipesSubject.next(res));
  }
  // get favorited recipes from localStorage
  loadFavoriteRecipesFromLocalStorage() {
    const savedRecipes = localStorage.getItem('favoriteRecipes');
    if (savedRecipes) {
      const parsedRecipes: Recipe[] = JSON.parse(savedRecipes);
      this._favoriteRecipesSubject.next(parsedRecipes);
    }
  }

  private saveFavoriteRecipesToLocalStorage(favoriteRecipes: Recipe[]): void {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }
  isFavorite(recipe: Recipe): Observable<boolean> {
    // this.loadFavoriteRecipes();

    return this._favoriteRecipesSubject.pipe(
      map((favoriteRecipes) => {
        return favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id);
      })
    );
  }
}
