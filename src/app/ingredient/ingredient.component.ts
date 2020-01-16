import { Component, Input } from '@angular/core';
import { Ingredient } from '../modele/ingredient.modele';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent{
  @Input() ingredients: Array<Ingredient> =  [];
}