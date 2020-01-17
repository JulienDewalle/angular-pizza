import { Component } from '@angular/core';
import { Pizza } from '../modele/pizza.modele';
import { User } from '../modele/author-modele';
import { Ingredient } from '../modele/ingredient.modele';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedPizza: Pizza;
  pizzas: Pizza[] = [];
  user: User = {
    name: 'Mota',
    firstname: 'Matthieu',
    birthday: '1991-11-18',
    avatar: 'https://www.gravatar.com/avatar/5355a3882df0fdd7689f8b0b5dc50720',
    age: null
  };
  ingredients: Ingredient[] = [
    { nom: 'chevre', image: 'chevre.jpg', poids: 50, prix: 2 },
    { nom: 'mozza', image: 'mozza.jpg', poids: 5, prix: 1 }
  ];
  selectedIngredients: Ingredient[] = [];

    // j'injecte le service dans le composant
  constructor(private pizzaService: PizzaService) {    
  }

  ngOnInit(){
    this.calculateAge();
    // on  recupere les pizzas dans le service
    this.pizzaService.getPizzas().then(
      pizzas => this.pizzas = pizzas
    );
  }

  private calculateAge(): void {
    let currentDate = Date.now(); // 2020-01-16 en timestamp (millisecondes)
    let birthDate = (new Date(this.user.birthday)).getTime(); // 1991-11-18 en timestamp (millisecondes)
    let timeDiff = currentDate - birthDate;
    let age = (new Date(timeDiff)).getFullYear() - 1970;

    this.user.age = age;
  }

  onSelect(pizza: Pizza): void {
    // On récupère la pizza cliquée
    console.log(pizza);
    this.selectedPizza = pizza;
  }

  selectIngredient(event: Ingredient) {
    console.log(event);
    // Si l'ingrédient n'est pas encore dans la liste
    // des ingrédients sélectionnés, on l'ajoute
    if (!this.selectedIngredients.includes(event)) {
      this.selectedIngredients.push(event);
    }
  }

  deleteIngredient(index: number, event) {
    event.stopPropagation();
    // On supprime l'index du tableau
    this.selectedIngredients.splice(index, 1);
  }
}