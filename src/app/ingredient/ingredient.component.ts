import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../modele/ingredient.modele';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent{
  @Input() ingredients: Array<Ingredient> =  [];
  @Output() select: EventEmitter<Ingredient> = new EventEmitter();
  
  chooseIngredient(ingredient: Ingredient): void {
    this.select.emit(ingredient);
     
  }
}