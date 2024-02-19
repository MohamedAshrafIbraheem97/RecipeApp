import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Recipe } from 'src/app/recipe/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  sanitizedSummary!: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.sanitizedSummary = this.sanitizer.bypassSecurityTrustHtml(
      this.recipe.summary
    );
    // this.elementRef.nativeElement.querySelector('.card-text').innerHTML =
    //   this.sanitizedSummary.toString();
  }
}
