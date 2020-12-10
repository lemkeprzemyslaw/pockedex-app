import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonDetailsComponent} from './components/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '',
    children: [
      {
        path: 'card/:id', component: PokemonDetailsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
