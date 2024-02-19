export interface Ingredient {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  meta?: Array<string>;
  name: string;
  original: string;
  originalName: string;
  unit: string;
  nameClean: string;
  measures: object;
}
