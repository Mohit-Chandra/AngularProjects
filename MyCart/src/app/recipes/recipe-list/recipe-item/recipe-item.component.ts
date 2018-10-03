import { Component, OnInit,Input,Injectable } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Injectable()
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  //@Output() recipeSelected=new EventEmitter<void>();
  @Input() recipe: Recipe;
  @Input() index:number; // to pass index from outside

  ngOnInit() {
  }
  

}
