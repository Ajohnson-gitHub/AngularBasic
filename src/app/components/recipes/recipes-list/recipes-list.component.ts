import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is some test',
      'https://img1.southernliving.timeinc.net/sites/default/files/styles/responsive_etr_gallery_desktop_portrait/public/image/2015/10/main/2419801_wtcnc_007_0.jpg?itok=h3HY_pZf'
    ),
    new Recipe(
      'A test Recipe',
      'This is some test',
      'https://img1.southernliving.timeinc.net/sites/default/files/styles/responsive_etr_gallery_desktop_portrait/public/image/2015/10/main/2419801_wtcnc_007_0.jpg?itok=h3HY_pZf'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
