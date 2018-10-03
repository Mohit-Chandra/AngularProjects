import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService
{
   // recipeSelected =  new EventEmitter<Recipe>();
    
    private recipes: Recipe[]=[
        new Recipe('Biryani',
        'Chicken',
        'https://c.pxhere.com/photos/85/eb/salmon_dill_lemon_plate_eat_friends_party_delicious-757897.jpg!d'
        ,[
            new Ingredient('Meat',1),
            new Ingredient('Bread',5)
        ]),
        new Recipe('Biryani',
        'Egg',
        'https://c.pxhere.com/photos/85/eb/salmon_dill_lemon_plate_eat_friends_party_delicious-757897.jpg!d'
        ,[
        new Ingredient('Butter',3),
        new Ingredient('Buns',5)
        ])
      ];
      constructor(private slService:ShoppingListService)
      {

      }
      getRecipes()
      {
          return this.recipes.slice();
      }
      addIngredientsToShopppingList(ingredients:Ingredient[])
      {
        this.slService.addIngredient(ingredients);

      }
      getRecipe(id:number){
          return this.recipes[id];
      }
}