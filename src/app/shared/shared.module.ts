import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavBarComponent,
    SearchComponent,
    RecipeCardComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavBarComponent, SearchComponent, RecipeCardComponent],
})
export class SharedModule {}
