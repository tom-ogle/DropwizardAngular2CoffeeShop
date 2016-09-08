import {Component} from "@angular/core";

@Component({
    selector: 'coffee-app',
    template: `
        <h1>{{title}}!</h1>
        <ul>
          <li *ngFor="let drink of drinks">
            {{ drink.name }}
          </li>
        </ul>
`
})
export class AppComponent {
    title = 'Angular 2 Coffee Shop';
    drinks = [
        new Drink('Americano', 'Coffee'),
        new Drink('Black Tea', 'Tea'),
        new Drink('Cappuccino', 'Coffee'),
        new Drink('Latte', 'Coffee')
    ];

    submitted = false;
    onSubmit() { this.submitted = true; }
}

export class Drink {
    constructor(public name: string, public family: string) {

    }
}
