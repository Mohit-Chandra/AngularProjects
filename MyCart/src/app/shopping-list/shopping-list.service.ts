import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{

    //ingredientsChanged =  new EventEmitter<Ingredient[]>();
    ingredientsChanged =  new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Banana',10),
        new Ingredient('Mango',10)
      ];

      getIngredients()
      {
          return this.ingredients.slice();
      }
     getIngredient(index:number){
         return this.ingredients[index];
     }
      addIngredients(ingred:Ingredient)
      {
          this.ingredients.push(ingred);
          console.log(this.ingredientsChanged.next(this.ingredients.slice()));
      }
      addIngredient(ingredient:Ingredient[]){
          for(let ingred of ingredient)
        {
            console.log("Ingredient: "+ingred.name);
        }
        console.log(this.ingredients.push(...ingredient));
        console.log(this.ingredientsChanged.next(this.ingredients.slice()));

      }
      updateIngredient(index:number,newIngredient:Ingredient){
          this.ingredients[index] = newIngredient;
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      deleteIngredient(index:number){
            this.ingredients.splice(index,1);
            this.ingredientsChanged.next(this.ingredients.slice());
      }

}