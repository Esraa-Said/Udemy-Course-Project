import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

@Input() recipe!: Recipe;
constructor(private _recipeService: RecipeService){}
onAddToShoppingList(){
this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}

}
