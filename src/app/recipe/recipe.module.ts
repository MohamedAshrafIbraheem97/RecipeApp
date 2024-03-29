import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [RecipeListComponent, RecipeDetailsComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    InfiniteScrollModule,
  ],
})
export class RecipeModule {}
