import {Injectable} from '@angular/core';

import {Drink} from '../model/drink';
import {DRINKS} from './mock.drinks';

@Injectable()
export class DrinkService {
    getDrinks(): Promise<Drink[]> {
        return Promise.resolve(DRINKS);
    }
}
