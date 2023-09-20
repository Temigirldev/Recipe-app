import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];

  constructor(public service: RecipeService) {}

  ngOnInit(): void {
    this.service.recipes$.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
