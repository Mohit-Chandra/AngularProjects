import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{

  @ViewChild('f') slForm:NgForm;

  // @ViewChild('nameInput')nameInputRef: ElementRef;
  // @ViewChild('amountInput')amountInputRef: ElementRef;

 // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Ingredient;
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
    .subscribe(
      (index:number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount: this.editedItem.amount 
        });
      }
    );
  }
  onAddIngredients(form:NgForm)
  {
    // const name=this.nameInputRef.nativeElement.value;
    // const amount=this.amountInputRef.nativeElement.value;
    const value = form.value;

    const newIngredient=new Ingredient(value.name,value.amount);
    //this.ingredientAdded.emit(newIngredient);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
    this.slService.addIngredients(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
