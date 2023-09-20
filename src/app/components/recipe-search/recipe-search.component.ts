import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
})
export class RecipeSearchComponent implements OnInit {
  query: string = '';

  constructor(private service: RecipeService, private router: Router) {}

  searchRecipe() {
    this.service.searchRecipes(this.query);
    this.router.navigate(['/recipes']);

  }


  ngOnInit(): void {}
}
