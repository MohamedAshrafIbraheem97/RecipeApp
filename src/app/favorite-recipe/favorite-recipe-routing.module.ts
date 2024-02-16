import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';

const routes: Routes = [{ path: '', component: FavoriteRecipesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteRecipeRoutingModule {}
