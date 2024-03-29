import { Ingredient } from './ingredient.model';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license?: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions?: Instruction[];
  cheap: boolean;
  creditsText: string;
  cuisines?: Array<string>;
  dairyFree: boolean;
  diets?: Array<string>;
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic?: boolean;
  lowFodmap: boolean;
  occasions?: Array<string>;
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30?: boolean;
  weightWatcherSmartPoints: number;
  dishTypes?: Array<string>;
  extendedIngredients?: Ingredient[];
  summary: string;
  preparationMinutes: number;
  cookingMinutes: number;
  originalId?: any;
  isFavorite?: boolean;
}

export interface Instruction {
  name: string;
  steps: Array<{
    number: number;
    step: string;
    ingredients?: Array<object>;
    equipment?: Array<object>;
    length?: object;
  }>;
}
