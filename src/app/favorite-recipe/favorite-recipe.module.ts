import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRecipeRoutingModule } from './favorite-recipe-routing.module';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FavoriteRecipesComponent],
  imports: [CommonModule, FavoriteRecipeRoutingModule, SharedModule],
})
export class FavoriteRecipeModule {}
