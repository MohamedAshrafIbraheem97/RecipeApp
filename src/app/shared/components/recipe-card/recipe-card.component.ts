import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/recipe/models/recipe.model';
import { RecipeService } from 'src/app/recipe/service/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  isFavorite!: boolean;

  sanitizedSummary!: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.checkIfFavorite(this.recipe);

    this.sanitizedSummary = this.sanitizer.bypassSecurityTrustHtml(
      this.recipe.summary
    );
    // this.elementRef.nativeElement.querySelector('.card-text').innerHTML =
    //   this.sanitizedSummary.toString();
  }

  addToFavorites(recipe: Recipe): void {
    this.recipeService.toggleFavorite(recipe);
  }

  checkIfFavorite(recipe: Recipe): void {
    this.recipeService.isFavorite(recipe).subscribe((isFav: boolean) => {
      this.isFavorite = isFav;
    });
  }
}
