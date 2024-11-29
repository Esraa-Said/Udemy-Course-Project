import {
  Component,
  ElementRef,
  
  ViewChild,

} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('ingredientName') ingredientNameRef!: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountRef!: ElementRef;

  constructor(private _shoppingService: ShoppingListService){}

  addItem() {
    const ingName = this.ingredientNameRef.nativeElement.value;
    const ingAmount = this.ingredientAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this._shoppingService.addIngredient(newIngredient);
  }
}
