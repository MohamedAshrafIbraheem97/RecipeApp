import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRecipeRoutingModule } from './favorite-recipe-routing.module';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';


@NgModule({
  declarations: [
    FavoriteRecipesComponent
  ],
  imports: [
    CommonModule,
    FavoriteRecipeRoutingModule
  ]
})
export class FavoriteRecipeModule { }
