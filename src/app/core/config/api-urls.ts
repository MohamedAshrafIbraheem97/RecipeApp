export const URLS = {
  recipes: {
    randomRecipes: '/recipes/random?limitLicense=true&number=10',
    recipeById: '/recipes/:id/information?includeNutrition=false',
    search:
      '/recipes/complexSearch?query=searchQuery&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeNutrition=false&recipeBoxId=2468&maxReadyTime=20&sort=calories&sortDirection=asc&offset=606&number=10&limitLicense=true',
  },
};
