import {Recipe} from "./recipes.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {

  }

  private recipes: Recipe[] = [
    new Recipe('Test recipe',
      'this is a test',
      'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French friest', 20)
      ]),
    new Recipe('Another Test recipe',
      'this is another test',
      'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredinets(ingredients);
  }

}
