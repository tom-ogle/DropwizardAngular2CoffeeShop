import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {DrinkService} from "./service/drink.service";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    providers: [DrinkService],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
