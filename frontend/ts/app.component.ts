import {Component, OnInit} from "@angular/core";

import {Drink} from './model/drink';
import {DrinkService} from './service/drink.service';

@Component({
    selector: 'coffee-app',
    template: `
        <h1>{{title}}!</h1>
        <ul>
          <li *ngFor="let drink of drinks">
            {{ drink.name }}
          </li>
        </ul>
    `,
    providers: [DrinkService]
})
export class AppComponent implements OnInit {

    constructor(private drinkService: DrinkService) {}

    ngOnInit(): void {
        this.getDrinks();
    }

    getDrinks(): void {
        this.drinkService.getDrinks().then(drinks => this.drinks = drinks)
    }

    title = 'Angular 2 Coffee Shop';
    drinks: Drink[];

    submitted = false;
    onSubmit() { this.submitted = true; }
}
