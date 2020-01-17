import { Injectable } from '@angular/core';
import { Pizza } from './modele/pizza.modele';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  // appel Ajax sur l'api
  getPizzas(): Promise<Pizza[]>{
    return this.http.get("http://localhost:3000/pizzas").toPromise().then(
      response => response as Pizza[]
    );
  }
}
