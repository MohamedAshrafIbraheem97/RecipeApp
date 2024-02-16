import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NavBarComponent, SearchComponent, RecipeCardComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, SearchComponent, RecipeCardComponent],
})
export class SharedModule {}
