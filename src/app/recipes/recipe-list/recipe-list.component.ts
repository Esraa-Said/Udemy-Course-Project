import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://th.bing.com/th/id/R.c423b4d3de84880e25e89471298c4913?rik=G7jqL1QyH3BrRg&pid=ImgRaw&r=0'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://th.bing.com/th/id/R.c423b4d3de84880e25e89471298c4913?rik=G7jqL1QyH3BrRg&pid=ImgRaw&r=0'
    ),
  ];
  ngOnInit(): void {}

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
