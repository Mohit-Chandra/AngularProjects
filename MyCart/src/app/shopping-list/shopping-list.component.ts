import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[];
  private subscription:Subscription;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    console.log(this.ingredients);
    this.subscription = this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log(this.ingredients);
        
      }
    );
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
 

}
