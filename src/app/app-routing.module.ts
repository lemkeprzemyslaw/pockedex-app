import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonDetailsComponent} from './components/pokemon-details/pokemon-details.component';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: PokemonListComponent
  },
  { path: 'card/:id', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
