import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

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

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  addItem() {
    const ingName = this.ingredientNameRef.nativeElement.value;
    const ingAmount = this.ingredientAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
