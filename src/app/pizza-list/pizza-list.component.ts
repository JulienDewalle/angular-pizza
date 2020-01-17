import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../modele/pizza.modele';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    // on recup les pizzas via le service API
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

}