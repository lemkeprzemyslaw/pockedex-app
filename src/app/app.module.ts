import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PokemonDetailsComponent} from './components/pokemon-details/pokemon-details.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    ListItemComponent,
    PokemonDetailsComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
