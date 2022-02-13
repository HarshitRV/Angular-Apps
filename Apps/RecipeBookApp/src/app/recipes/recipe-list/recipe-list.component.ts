import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is a test description",
      "https://i.imgur.com/ioG9NGs.jpeg"
    ),
    new Recipe(
      "Test Recipe 2", 
      "This is another test description", 
      "https://i.imgur.com/CUG0Aof.jpeg"
    ),
  ];

}
