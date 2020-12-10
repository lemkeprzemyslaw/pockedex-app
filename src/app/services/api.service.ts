import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';
import {Card} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    return this.http.get('https://api.pokemontcg.io/v1/cards', {params: {pageSize: '1000', setCode: 'base1|base2', supertype: 'Pokémon'}})
      .pipe(
        pluck('cards'),
        map((cards: Card[]) => cards.sort((a, b) => a.nationalPokedexNumber - b.nationalPokedexNumber))
      );
  }
}
