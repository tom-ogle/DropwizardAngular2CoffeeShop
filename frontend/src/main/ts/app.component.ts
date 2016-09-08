import {Component} from "@angular/core";

@Component({
    selector: 'coffee-app',
    template: '<p>Angular 2 Coffee Shop</p>'
})
export class AppComponent {
    title = 'Angular 2 Coffee Shop';
    coffees = [
        new Drink('Americano', 'Coffee'),
        new Drink('Black Tea', 'Tea'),
        new Drink('Cappuccino', 'Coffee'),
        new Drink('Latte', 'Coffee')
    ];
}

export class Drink {
    constructor(public name: string, public family: string) {

    }
}
