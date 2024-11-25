import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

@Input() recipe!: Recipe;
constructor(){
  console.log(DropdownDirective)
}


}
